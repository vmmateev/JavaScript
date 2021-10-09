//1.Rectangle

//2.Data Class

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

//8.Juice Flavors

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

//11.View Model (not included in final score)

//12.Payment Package

//13.String Builder * (not included in final score)


