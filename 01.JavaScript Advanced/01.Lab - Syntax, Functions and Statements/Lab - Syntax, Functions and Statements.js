//1.Echo Function
function echo(input) {
    let count = input.length;
    console.log(count);
    console.log(input);
};
echo('Hello, JavaScript!');
echo('strings are easy');

//2.String Length
function stringLenght(input1, input2, input3) {
    let sumLength = input1.length + input2.length + input3.length;
    let averageLength = Math.round(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
}
stringLenght('chocolate', 'ice cream', 'cake');
stringLenght('pasta', '5', '22.3');

//03. Largest Number
function largestNumber(num1, num2, num3) {
    let result;
    if (num1 > num2 && num1 > num3) {
        result = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        result = num2;
    }
    else if (num3 > num1 && num3 > num2) {
        result = num3;
    }
    console.log(`The largest number is ${result}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

//04. Circle Area
function circleArea(input) {
    let inputType = typeof (input);
    if (inputType === 'number') {
        let circleArea = input ** 2 * Math.PI;
        console.log(circleArea.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}
circleArea(5);
circleArea('name');

//05. Math Operations
function mathOperations(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');

//06. Sum of Numbers N…M
function sumNumbers(start, end) {
    let sum = 0;
    for (let index = Number(start); index <= Number(end); index++) {
        sum += index;
    }
    return sum;
}
sumNumbers('1', '10');

//07. Day of Week
function dayOfWeek(input) {
    switch (input) {
        case 'Monday': console.log(1); break;
        case 'Tuesday': console.log(2); break;
        case 'Wednesday': console.log(3); break;
        case 'Thursday': console.log(4); break;
        case 'Friday': console.log(5); break;
        case 'Saturday': console.log(6); break;
        case 'Sunday': console.log(7); break;
        default: console.log('error'); break;
    }
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('six');

//08. Days in a month
function monthDays(month, year) {
    let result = new Date(year, month, 0).getDate();
    console.log(result);
}
monthDays(2, 2021);

//09. Square of Stars
function squareStars(input) {
    if (input === undefined) {

        let square = '* * * * *';
        for (let outer = 0; outer < 5; outer++) {
            console.log(square);
        }
    } else {
        let text = '';
        for (let countStars = 0; countStars < input; countStars++) {
            text += '* ';
        }
        for (let index = 0; index < input; index++) {
            console.log(text);
        }
    }
}
squareStars(10);


//10. Aggregate Elements
function aggregateElements(input) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let index = 0; index < input.length; index++) {
        sum += Number(input[index]);
        inverseSum += 1 / Number(input[index]);
        concat += input[index].toString();
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);