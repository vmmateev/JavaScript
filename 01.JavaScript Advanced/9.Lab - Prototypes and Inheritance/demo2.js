const myProto = {
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
}

const instance = Object.create(myProto);

instance.name = 'John';
instance.sayHi();

//=================================================================
console.log(Array.prototype);

Array.prototype.getLastIndex = function () {
    return this.length - 1;
}

const myArr = [1,2,3];
console.log(myArr.getLastIndex());

