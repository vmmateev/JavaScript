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
