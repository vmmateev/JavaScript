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

console.log(heroicJson(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicJson(['Jake / 1000 / Gauss, HolidayGrenade']));

//5.Lowest Prices in Cities

