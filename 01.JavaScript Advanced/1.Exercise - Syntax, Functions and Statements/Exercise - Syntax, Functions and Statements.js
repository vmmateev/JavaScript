//1.Fruit
function calcFruit(fruit, weight, pricePerKilo) {
    let weightInKilo = weight / 1000;
    let totalPrice = weightInKilo * pricePerKilo;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}
//calcFruit('orange', 2500, 1.80);
//calcFruit('apple', 1563, 2.35);

//02. Greatest Common Divisor – GCD
function greatestCommDivisor(input1, input2) {

    input1 = Math.abs(input1);
    input2 = Math.abs(input2);
    while (input2) {
        let t = input2;
        input2 = input1 % input2;
        input1 = t;
    }
    console.log(input1);
}
//greatestCommDivisor(15, 5);
//greatestCommDivisor(2154, 458);

//03. Same Numbers
function sameNumb(intNum) {
    let input = intNum.toString();
    let isSame = true;
    let sum = parseInt(input[0]);
    for (let index = 1; index < input.length; index++) {
        let currentNumber = input[index];
        let previousNumber = input[index - 1];
        if (previousNumber === currentNumber) {
        } else {
            isSame = false;
        }
        sum += parseInt(input[index]);
    }
    console.log(isSame);
    console.log(sum);
}
//sameNumb(2222222);
//sameNumb(1234);

//04. Previous Day
function prevDay(year, month, day) {
    // const date = new Date(year, month - 1, day);
    // const resultDate = new Date();
    //resultDate.setDate(date.getDate() - 1)
    // console.log(resultDate);
    let dateString = year + '-' + month + '-' + day;
    let event = new Date(dateString);
    event.setDate(day - 1);
    console.log(event.getFullYear() + `-` + (Number(event.getMonth()) + 1) + '-' + event.getDate());
}
//prevDay(2016, 9, 30);
//prevDay(2016, 10, 1);

//05. Time to Walk
function timeToWalk(stepsCount, meters, speed) {
    let distance = stepsCount * meters;
    let speedInMs = speed * 0.277778;
    let time = distance / speedInMs;

    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);
//https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
//6.Road Radar
function roadRadar(speed, zone) {
    let speedLimit;
    switch (zone) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    let speedDiff = Math.abs(speed - speedLimit);
    let status = '';
    let isSpeeded = true;
    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        isSpeeded = false;
    } else {
        if (speedDiff > 40) {
            status = 'reckless driving';
        } else if (speedDiff > 20 && speedDiff <= 40) {
            status = 'excessive speeding';
        } else if (speedDiff <= 20) {
            status = 'speeding';
        }
        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');

//07. Cooking by Numbers
function cookNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);

    let arr = [op1, op2, op3, op4, op5];
    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case 'chop': number = number / 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number = number + 1; break;
            case 'bake': number = number * 3; break;
            case 'fillet': number = number - (number * 0.2); break;
        }
        console.log(number);
    }
}
// cookNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

//8.Validity Checker
function validCheck(x1, y1, x2, y2) {

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH ** 2 + distY ** 2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// validCheck(3, 0, 0, 4);
// validCheck(2, 1, 1, 1);

//09.Words Uppercase (not included in final score)
function toUpperFilter(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);
}
//   toUpperFilter('Hi, how are you?');
//   toUpperFilter('hello');

function toUpperMatch(text) {
    let result = text.toUpperCase()
        .match(/\w+/g)
        .join(', ');

    console.log(result);
}
//   toUpperMatch('Hi, how are you?');
//   toUpperMatch('hello');