//'use strict'

const person = {
    name: 'Peter',
    age: 23
}

console.log(person);
console.log(person.name);

console.log(Object.defineProperty(person, 'lastName', {
    value: "Jackon",
    writeable: true, // Не можем да променяме value със person.lastName = "anotherName";
    enumerable: false, // За да го виждаме при обхождане с цикъл или да не го видим но ако го достъпим директно го има
    confifurable: true, //свойството не може да се променя (запечатваме го)
}));


person.lastName = 'anotherName';
for (let key in person) {
    console.log(key, '->', person[key]);
}

Object.seal(person); //Всички свойства се запечатват и не могат да се променят или добавят