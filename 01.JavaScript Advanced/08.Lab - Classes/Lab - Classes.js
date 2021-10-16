//1.Person

// class Person {
//     constructor(firstName, lastName, age, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }

//     toString() {
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
//     }
// }

// const guy = new Person('John', 'Smith', 23, 'john@smith.com');


//console.log(guy.toString());

//2.Get Persons
function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    const person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const person2 = new Person('SoftUni');
    const person3 = new Person('Stephan', 'Johnson', 25);
    const person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [person1, person2, person3, person4];
}

console.log(getPersons().join(" "));


//3.Circle
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Radius must be a number')
        }

        this._radius = value;
    }
    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Diameter must be a number')
        }

        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}


// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);



//4.Point Distance
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return (Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2))
    }
}

const p1 = new Point(1, 1);
const p2 = new Point(4, 5);

// console.log(p1, p2);
// console.log(Point.distance(p1, p2));