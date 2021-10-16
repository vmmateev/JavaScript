class Person {
    data = new Map()
    
    constructor(name, age = 18, secret) {
        this.name = name,
            this.age = age
        this.secretField = () => secret;
    }

    sayHello() {
        console.log(`${this.name} says hello!`);
    }

    static cheer() {
        console.log('Woo');
    } //не е част от иснтанцията а от дефиницията

    static compareTo(a, b) {
        return a.age - b.age;
    }
}



const person1 = new Person('Peter', 23, 'secret message');
const person2 = new Person('George');
const person3 = new Person('Mary', 21);
person2.age = 18;
console.log(person1);
console.log(person1.age);


person1.height = 178;

console.log(person1);
person1.sayHello();

const hello = person1.sayHello();
hello

console.log(person1);

const people = [person1, person2, person3];
people.sort(Person.compareTo);
console.log(people);

console.log(person1.secretField());
console.log(person1.secret);