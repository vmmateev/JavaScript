//1.Even Position Element
function evenPos(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result[result.length] = input[i];
        }
    }
    console.log(result.join(' '));
}
// evenPos(['20', '30', '40', '50', '60']);
// evenPos(['5', '10']);

//2. Last K Numbers Sequence
function numSeq(seqLength, countElements) {
    let result = [1];

    for (let i = 1; i < seqLength; i++) {
        let startIndex = Math.max(0, i - countElements);
        let currentElement = result.slice(startIndex, startIndex + countElements).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    return result;
}
// console.log(numSeq(6,3));
// console.log(numSeq(8,2));

//3.Sum First Last
function sumFirstLast(strings) {
    const first = Number(strings.shift());
    const last = Number(strings.pop());

    return first + last;
}
// console.log(sumFirstLast(['20', '30', '40']));
// console.log(sumFirstLast(['5', '10']));

//4.Negative / Positive Numbers
function negPosSort(input) {
    let result = [];
    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}
// negPosSort([7, -2, 8, 9]);
// negPosSort([3, -2, 0, -1]);

//5.Smallest Two Numbers
function smallestTwo(arrayInput) {
    let result = arrayInput.sort((a, b) => a - b);
    console.log(result[0], result[1]);
}
// smallestTwo([30, 15, 50, 5]);
// smallestTwo([3, 0, 10, 4, 7, 3]);

//6.Bigger Half
function biggerHalf(arrayInput) {
    // let length = Math.ceil(arrayInput.length / 2);
    // let result = arrayInput.sort((a, b) => a - b);
    // let printArr = [];
    // for (let i = result.length-length; i < result.length; i++) {
    //     printArr.push(result[i]);
    // }
    // return printArr;

    return arrayInput.sort((a, b) => a - b).slice(arrayInput.length / 2);

}
// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));


//7.Piece of Pie
function pie(pies, startPie, endPie) {
    const start = pies.indexOf(startPie);
    const end = pies.indexOf(endPie);

    const result = pies.slice(start, end + 1);

    return result;
}

// console.log(pie(['Pumpkin Pie',
//     'Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie',
//     'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie'
// ));

// console.log(pie(['Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie'
// ));

//8.Process Odd Positions
function oddPos(input) {
    //First solution ====================================
    // let result = [];
    // for (let i = 0; i < input.length; i++) {
    //     if (i % 2 !== 0) {
    //         result.push(input[i]*2);
    //     }
    // }
    // result.reverse();
    // console.log(result.join(' '));

    //Second solution ====================================
    // const oddNums = input.filter((value, index) => index % 2 == 1);
    // const doubled = oddNums.map(x => x * 2);
    // doubled.reverse();
    // console.log(doubled.join(' '));

    //Third solution ====================================
    console.log(input
        .filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(" "));
}
// oddPos([10, 15, 20, 25]);
// oddPos([3, 0, 10, 4, 7, 3]);

//9.Biggest Element
function biggestElMatrix(matrix) {
    let biggest = -9999999999;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= biggest) {
                biggest = matrix[i][j];
            }
        }
    }
    return biggest;
}
// console.log(biggestElMatrix([[20, 50, 10],
// [8, 33, 145]]));
// console.log(biggestElMatrix([[3, 5, 7, 12],
// [-1, 4, 33, 2],
// [8, 3, 0, 4]]));

//10.Diagonal Sums
function diagonalSum(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length - i - 1];
    }
    console.log(`${sum1} ${sum2}`)
}

// diagonalSum([[20, 40],
// [10, 60]]);

// diagonalSum([[3, 5, 17],
// [-1, 7, 14],
// [1, -8, 89]]);

//11.Equal Neighbors
function equalNeighbors(matrix) {
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (isInsideMatrix(row, col + 1, matrix) && matrix[row][col] === matrix[row][col + 1]) {
                counter++;
            }
            if (isInsideMatrix(row + 1, col, matrix) && matrix[row][col] === matrix[row + 1][col]) {
                counter++;
            }
        }
    }

    function isInsideMatrix(row, col, matrix) {
        let isInside = true;
        if (row < 0 || row >= matrix.length) {
            isInside = false;
        }
        if (isInside && col < 0 || col >= matrix[row]) {
            isInside = false;
        }
        return isInside;
    }
    return counter;
}
// console.log(equalNeighbors([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]));

// console.log(equalNeighbors([
//     ['', 'done', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]));

// console.log(equalNeighbors([
//     [2, 2, 5, 7, 4],
//     [4, 0, 5, 3, 4],
//     [2, 5, 5, 4, 2]]));