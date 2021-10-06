//1.Calorie Object
function calorieObj(strArr) {
    const result = {};

    for (let i = 0; i < strArr.length; i += 2) {
        result[strArr[i]] = Number(strArr[i + 1]);
    }
    return result;
}

// console.log(calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// console.log(calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

//2.Construction Crew
function ctorCrew(objCrew) {


    if (objCrew.dizziness) {
        objCrew.levelOfHydrated += objCrew.weight * objCrew.experience * 0.1;
        objCrew.dizziness = false;
    }

    return objCrew;
}

// console.log(ctorCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }
// ));
// console.log(ctorCrew({
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }
// ));
// console.log(ctorCrew({
//     weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false
// }
// ));

//3.Car Factory
function carFactory(clientCar) {
    const resultCar = {};

    const properWheelSize = clientCar.wheelsize % 2 == 0 ? clientCar.wheelsize - 1 : clientCar.wheelsize;

    resultCar.model = clientCar.model;
    resultCar.engine = getEngine(clientCar.power);
    resultCar.carriage = { type: clientCar.carriage, color: clientCar.color };
    resultCar.wheels = new Array(4).fill(properWheelSize, 0, 4);

    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 }
        } else if (power <= 120) {
            return { power: 120, volume: 2400 }
        } else if (power <= 200) {
            return { power: 200, volume: 3500 }
        }
    }

    return resultCar;
}

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// ));
// console.log(carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }
// ));

//4.Heroic Inventory
function heroicJson(strArr) {
    let result = [];

    for (const iterator of strArr) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({ name, level, items });
    }

    return JSON.stringify(result);
}

// console.log(heroicJson(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// ));
// console.log(heroicJson(['Jake / 1000 / Gauss, HolidayGrenade']));

//5.Lowest Prices in Cities
function lowestPrice(strArr) {
    let catalogue = {};

    strArr.forEach((el) => {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!catalogue[product]) {
            catalogue[product] = {};
        }

        catalogue[product][town] = price;
    });
    for (const prod in catalogue) {
        const sorted = Object.entries(catalogue[prod]).sort((a, b) => a[1] - b[1]);

        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

// lowestPrice(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']
// );

//6.Store Catalogue
function storeCatalogue(strArr) {
    const productCatalogue = {};

    strArr.forEach((el) => {
        let [productName, price] = el.split(' : ');
        price = Number(price);
        const index = productName[0];
        if (!productCatalogue[index]) {
            productCatalogue[index] = {};
        }
        productCatalogue[index][productName] = price;

    })
    let intialSort = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));


    for (const key of intialSort) {
        let products = Object.entries(productCatalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        })
    }
}

// storeCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// );
// storeCatalogue(['Banana : 2',
//     'Rubic\'s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']
// );

//7.Towns to JSON
function townsToJson(strArr) {
    const result = [];
    const splitted = strArr[0].split('|');
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();

    for (let i = 1; i < strArr.length; i++) {
        const obj = {};
        let splittedEntry = strArr[i].split('|');

        obj[town] = splittedEntry[1].trim();
        obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));

        result.push(obj);
    }

    return JSON.stringify(result);
}

// console.log(townsToJson(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']
// ));
// console.log(townsToJson(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']
// ));

//8.Rectangle
function rectangle(width, height, color) {
    return {
        width: width,
        height: height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea: function () {
            return width * height;
        }
    }
}

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

//9.Sorted List (not included in final score)


//10. Heroes
function solve() {
    let fighter = (name) => {
        return {
            name,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina -= 1;
                console.log(`${name} slashes at the foe!`);
            }
        }
    }
    let mage = (name) => {
        return {
            name,
            health: 100,
            mana: 100,
            cast(spellName) {
                this.mana -= 1;
                console.log(`${name} cast ${spellName}`);
            }
        }
    }
    return { fighter: fighter, mage: mage }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

//11.Jan's Notation * (not included in final score)

