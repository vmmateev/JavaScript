//1.Fruit
function calcFruit(fruit, weight, pricePerKilo) {
    let weightInKilo = weight / 1000;
    let totalPrice = weightInKilo * pricePerKilo;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}
calcFruit('orange', 2500, 1.80);
calcFruit('apple', 1563, 2.35);

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
greatestCommDivisor(15, 5);
greatestCommDivisor(2154, 458);

//03. Same Numbers
function sameNumb(input) {
    let isSame = false;
    for (let index = 1; index < input.length; index++) {
        let currentNumber = input[index];
        let previousNumber = input[index - 1];
        if (previousNumber===currentNumber) {
            isSame = true;
        }else{
            isSame = false;
            break;
        }
            
    }
    console.log(isSame);
}
sameNumb(22222222222222);