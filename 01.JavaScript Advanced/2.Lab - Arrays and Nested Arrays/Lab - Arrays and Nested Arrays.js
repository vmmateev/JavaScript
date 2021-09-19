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

//6.Bigger Half

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