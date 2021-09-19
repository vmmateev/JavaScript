//1.Print an Array with a Given Delimiter
function printArray(strArray, delimiter) {
    console.log(strArray.join(delimiter));
}
// printArray(['One',
//     'Two',
//     'Three',
//     'Four',
//     'Five'],
//     '-'
// );

// printArray(['How about no?', 
// 'I',
// 'will', 
// 'not', 
// 'do', 
// 'it!'], 
// '_'
// );

//2. Print every N-th Element from an Array
function printElement(arrayInput, number) {
    let result = [];
    for (let i = 0; i < arrayInput.length; i += number) {
        result.push(arrayInput[i]);
    }
    return result;
}
// console.log(printElement(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// ));
// console.log(printElement(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// ));
// console.log(printElement(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6
// ));

//3. Add and Remove Elements
function addRemoveElement(strArray) {
    let result = [];
    let counter = 0;
    for (let i = 0; i < strArray.length; i++) {
        counter++;
        if (strArray[i] === 'add') {
            result.push(counter);
        } else {
            result.pop();
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    }
    console.log(result.join('\n'));
}
// addRemoveElement(['add',
//     'add',
//     'add',
//     'add']
// );
// addRemoveElement(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// );
// addRemoveElement(['remove',
//     'remove',
//     'remove']
// );

//4. Rotate Array
function rotateArray(strArray, rotateCount) {
    for (let i = 0; i < rotateCount; i++) {

        strArray.unshift(strArray.pop());
    }
    console.log(strArray.join(' '));
}
// rotateArray(['1',
// '2',
// '3',
// '4'],
// 2
// );
// rotateArray(['Banana', 
// 'Orange', 
// 'Coconut', 
// 'Apple'], 
// 15
// );

//5. Extract Increasing Subsequence from Array
function extract(numArray) {
    let result = [];
    numArray.reduce((acc, currentElement, index) => {
        if (acc <= currentElement) {
            result.push(acc);
            acc = currentElement;
        }
        if (index == numArray.length -1) {
            result.push(acc);
        }
        return acc;
    });
    return(result);
}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(extract([1,
    2,
    3,
    4]
));
console.log(extract([20,
    3,
    2,
    15,
    6,
    1]
));