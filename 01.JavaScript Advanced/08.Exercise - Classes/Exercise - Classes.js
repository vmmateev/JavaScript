//1.Rectangle
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}


// let rect = new Rectangle(4, 5, 'Red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

//2.Data Class
class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
// console.log(myData);
// myData.fulfiled = true;
// console.log(myData);

//3.Tickets
function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    const ticketsObj = [];

    tickets.forEach((entry) => {
        const [dest, price, status] = entry.split('|');

        ticketsObj.push(new Ticket(dest, Number(price), status));
    })
    if (criteria == "destination") {
        ticketsObj.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })
    } else if (criteria == "status") {

        ticketsObj.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    } else {
        ticketsObj.sort((a, b) => {
            return a.price - b.price;
        })
    }

    return ticketsObj;
}

// console.log(solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'
// ));

// console.log(solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status'
// ));

//4.Sorted List
class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }
    add(number) {
        this.numbers.push(number);
        this.size += 1;
        this.numbers.sort((a, b) => a - b)
    }

    get(index) {
        this.outOfBoundCheck(index);
        return this.numbers[index];
    }

    remove(index) {
        this.outOfBoundCheck(index);
        this.numbers.splice(index, 1);
        this.size -= 1;
    }

    outOfBoundCheck(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error("No such index in list");
        }
    }
}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));


//5.Length Limit
class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            return this.innerLength = 0;
        }
        return this.innerLength -= length;
    }

    toString() {
        if (this.innerLength == 0) {
            return "...";
        } else if (this.innerString.length <= this.innerlength) {
            return this.innerString;
        } else {
            let result = this.innerString.slice(0, this.innerLength);
            return result += "...";
        }
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4);
// console.log(test.toString()); // Test

//6.Company
class Company {

    constructor(name) {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, position, salary });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let currentBest = {
            name: "",
            salary: 0
        };
        for (let depKey in this.departments) {
            let averageSalary = 0;
            for (let empKey in this.departments[depKey]) {
                averageSalary += this.departments[depKey][empKey].salary;
            }

            averageSalary = averageSalary / this.departments[depKey].length;
            if (currentBest.salary < averageSalary) {
                currentBest.name = depKey;
                currentBest.salary = averageSalary;
            }
        }

        this.departments[currentBest.name].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
            // if (a.salary - b.salary < 0) {
            //     return b;
            // } else if (a.salary - b.salary > 0) {
            //     return a;
            // } else {
            //     return a.name.localeCompare(b.name);
            // }
        })

        let bestDepString = "";
        bestDepString += `Best Department is: ${currentBest.name}\n`;
        bestDepString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        this.departments[currentBest.name].forEach((el) => {
            // if (this.departments[currentBest.name].indexOf(el) == this.departments[currentBest.name].length - 1) {

            //     bestDepString += `${el.name} ${el.salary.toFixed(2)} ${el.position}`;
            // } else {
            bestDepString += `${el.name} ${el.salary} ${el.position}\n`;
            // }
        })


        return bestDepString.trim();
    }
}

// let company = new Company();
// company.addEmployee("Stanimir", 2000, "engineer", "Construction");
// company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// company.addEmployee("Slavi", 500, "dyer", "Construction");
// company.addEmployee("Stan", 2000, "architect", "Construction");
// company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// company.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(company.bestDepartment());

//7.HEX
class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        return new Hex(this.value + number);
    }

    minus(number) {
        return new Hex(this.value - number);
    }

    parse(string) {
        return string.slice(2).toString(10);
    }
}

// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString() === '0xF');
// console.log(FF.parse('AAA'));

//8.Juice Flavors
function solve8(juicesArr) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();
    
    for (let index = 0; index < juicesArr.length; index++) {
        let [juiceName, amount] = juicesArr[index].split(' => ');
        amount = Number(amount);

        if (!juicesAmount.has(juiceName)) {
            juicesAmount.set(juiceName, 0);
        }
        let totalAmount = juicesAmount.get(juiceName) + amount;
        if (totalAmount >= 1000) {
            if (!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0);
            }
            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = juicesBottles.get(juiceName) + newBottles;
            juicesBottles.set(juiceName, totalBottles);
        }

        juicesAmount.set(juiceName, totalAmount % 1000);
    }
    for (const [key, val] of juicesBottles) {
        console.log(`${key} => ${val}`)
    }
}

// solve8(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
// );
// console.log('==========================');
// solve8(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']
// );



//9.Auto-Engineering Company
function solve(input) {
    const carBrands = new Map();
    input.forEach((el) => {
        let [brand, model, count] = el.split(' | ');

        count = Number(count);

        if (carBrands.has(brand)) {
            let carBrand = carBrands.get(brand);
            if (carBrand.has(model)) {
                let carModel = carBrand.get(model);
                carModel += count;
                carBrand.set(model, carModel);

            } else {
                carBrand.set(model, count);
            }
        } else {
            const modelMap = new Map();
            modelMap.set(model, count);
            carBrands.set(brand, modelMap);
        }
    })

    for (const key of carBrands.keys()) {
        console.log(key);
        const brand = carBrands.get(key);
        for (const [model, count] of brand) {
            const count = brand.get(model);
            console.log(`###${model} -> ${count}`);
        }
    }
}

// solve(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']
// );

//10.Contacts Builder (not included in final score)
//in file

//11.View Model (not included in final score)
//in file

//12.Payment Package - Unit Test Package
//in file

//13.String Builder * (not included in final score)


