function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);

    let result = (firstNumber - secondNumber);
    
    let divResult = document.getElementById('result');    
    divResult.textContent = result; 
}