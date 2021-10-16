//01.Person
function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ''
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            const [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },
        configurable: true,
        enumerable: true,
    })
    return result;
}

// let person = createPerson("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

//02.Person and Teacher

//03.Inheriting and Replacing ToString

//04.Extend Prototype
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`
    }
}

//Judge exercise 04
function extend(classDefinition) { // classDefinition == Person (класа Person а не инстанцията)
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
//Judge exercise 04

// extend(Person);
// let p = new Person('Pesho', 'email@hit.bg');
// console.log(p.species)
// console.log(p.toSpeciesString())

//05.Class Hierarchy
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}




