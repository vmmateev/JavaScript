function solve() {
  let text = document.querySelector('#text').value.toLowerCase();
  let command = document.getElementById('naming-convention').value;
  let result = "";

  if (command == "Pascal Case") {
    let textArr = text.split(' ');
    for (let i = 0; i < textArr.length; i++) {
      let firstChar = textArr[i].charAt(0).toUpperCase();
      let otherText = textArr[i].slice(1);
      result += (firstChar + otherText);
    }
  } else if (command == "Camel Case") {
    let textArr = text.split(' ');
    result += (textArr[0]);
    for (let i = 1; i < textArr.length; i++) {
      let firstChar = textArr[i].charAt(0).toUpperCase();
      let otherText = textArr[i].slice(1);
      result += (firstChar + otherText);
    }
  } else {
    result = "Error!";
  }
  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}