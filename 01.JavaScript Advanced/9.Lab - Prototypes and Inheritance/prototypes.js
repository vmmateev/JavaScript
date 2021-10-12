class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return this.radius ** 2 * Math.PI;
    }
}
console.log(Circle.prototype);

const c = new Circle(5);

console.log(c);
console.log(c.hasOwnProperty('getArea')); // функциите се пазят в протоипа
console.log(c.hasOwnProperty('radius')); //Данните се пазят в инстанцията
console.log(c.getArea());

console.log(Object.getPrototypeOf(c).hasOwnProperty('getArea'));

