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
    // let counter = 0;
    // for (let i = 0; i < strArray.length; i++) {
    //     counter++;
    //     if (strArray[i] === 'add') {
    //         result.push(counter);
    //     } else {
    //         result.pop();
    //     }
    // }
    // if (result.length === 0) {
    //     console.log('Empty');
    // }

    let number = 1;
    strArray.forEach(element => {
        if (element === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    });
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
        if (index == numArray.length - 1) {
            result.push(acc);
        }
        return acc;
    });
    return (result);
}
// console.log(extract([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]
// ));
// console.log(extract([1,
//     2,
//     3,
//     4]
// ));
// console.log(extract([20,
//     3,
//     2,
//     15,
//     6,
//     1]
// ));

//6.List Of Names

function listName(strArr) {
    let result = strArr.sort(function (a, b) {
        return a.localeCompare(b)
    });

    counter = 1;
    for (let i = 0; i < strArr.length; i++) {
        console.log(`${counter}.${result[i]}`);
        counter++;
    }
}
// listName(["John", "Bob", "Christina", "Ema"]);

//7.Sorting Numbers
function sortNumb(intArr) {
    intArr.sort((a, b) => a - b);
    let result = [];
    while (intArr.length) {
        result.push(intArr.shift());
        result.push(intArr.pop());
    }
    return result.filter(x => x != undefined);
}

// console.log(sortNumb([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(sortNumb([1, 65, 3, 52, 48, 63, 31, -3, 18]));

//08. Sort an Array by 2 Criteria
function sortByTwo(strArr) {
    const result = strArr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length
    });


    console.log(result.join('\n'));
}

// sortByTwo(['alpha', 
// 'beta', 
// 'gamma']
// );
// sortByTwo(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// );
// sortByTwo(['test', 
// 'Deny', 
// 'omen', 
// 'Default']
// );

//09. Magic Matrices
function magicMatrix(matrix) {

    let sum = 0;

    matrix[0].forEach(x => sum += x);
    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);

        if (sum != rowSum) {
            return false;
        }

    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {

            colSum += matrix[row][col];
        }
        if (colSum != sum) return false;
    }
    return true;

    // With unique Set if summs are equal there is only 1 sum inside the matrix

    // let sums = new Set(); // set of unique sums

    // // Sum rows and add sum to set
    // for (let i = 0; i < matrix.length; i++) {
    //   let sum = 0;
    //   for (let a = 0; a < matrix.length; a++) {
    //     sum += matrix[i][a];
    //   }
    //   sums.add(sum)
    // }

    // // Sum columns and add sum to set
    // for (let i = 0; i < matrix.length; i++) {
    //   let sum = 0;
    //   for (let a = 0; a < matrix.length; a++) {
    //     sum += matrix[a][i];
    //   }
    //   sums.add(sum)
    // }

    // return sums.size === 1;
}

// console.log(magicMatrix([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]));

// console.log(magicMatrix([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]));

// console.log(magicMatrix([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]));



//10. Tic-Tac-Toe (not included in final score)
function TicTacToe(arr) {
    // const gameBoard = [0, 0, 0].map(x => ["false", "false", "false"])
    const gameBoard = [["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"]]
    
    
    let player = "X"
 
    function searchForWinningMove(gameBoard, row, idx) {
        return (
            gameBoard[row].every(x => x === player) ||
            gameBoard
                .reduce((a, v) => {
                    a.push(v[idx])
                    return a
                }, [])
                .every(x => x === player) ||
            [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]].every(x => x === player) ||
            [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]].every(x => x === player)
        )
    }
 
    const printBoard = board => console.log(board.map(x => x.join("\t")).join("\n"))
 
    for (let i = 0; i < arr.length; i++) {
        const [row, idx] = arr[i].split(" ").map(Number)
 
        if (gameBoard[row][idx] !== "false") {
            console.log("This place is already taken. Please choose another!")
            continue
        }
        gameBoard[row][idx] = player
 
        if (searchForWinningMove(gameBoard, row, idx)) {
            console.log(`Player ${player} wins!`)
            printBoard(gameBoard)
            break
        }
 
        if (gameBoard.every(x => x.every(y => y !== "false"))) {
            console.log("The game ended! Nobody wins :(")
            printBoard(gameBoard)
            break
        }
 
        player = player === "X" ? "O" : "X"
    }
}

// console.log(TicTacToe(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// ))
// console.log(TicTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// ))

//11. Diagonal Attack (not included in final score)
function diagonalAttack(matrix) {

    // Convert matrix elements to numbers
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
    }

    // Sum two main diagonals of matrix
    let firstDiagonalSum = 0, secondDiagonalSum = 0;
    let secondDiagonalPos = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][secondDiagonalPos];
        secondDiagonalPos--;
    }

    // If sums are equal change all other numbers in matrix to first sum
    if (firstDiagonalSum == secondDiagonalSum) {
        secondDiagonalPos = matrix.length - 1;
        for (let i = 0; i < matrix.length; i++) {
            matrix[i].map((num, index) => {
                // If the numbers aren't part of the diagonals change them
                if (index !== i && index !== secondDiagonalPos) {
                    matrix[i][index] = firstDiagonalSum;
                }
            })
            secondDiagonalPos--;
        }
    }

    matrix.forEach(line => console.log(line.join(' ')));
}
// diagonalAttack(['5 3 12 3 1',
// '11 4 23 2 5',
// '101 12 3 21 10',
// '1 4 5 2 2',
// '5 22 33 11 1']
// );

// diagonalAttack(['1 1 1',
// '1 1 1',
// '1 1 0']
// );


//12. Orbit (not included in final score)
function orbit(params) {
    const [rows, cols, starX, starY] = [...params].map(Number);
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols))
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starX), Math.abs(col - starY)) + 1;
        }
    }

    matrix.forEach(line => console.log(line.join(' ')))
}

// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);

//13. Spiral Matrix (not included in final score)
function spiralMatrix(rows, cols) {

    // Create empty NxN matrix
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(new Array(cols))
    }
  
    let startCol = 0;
    let startRow = 0;
    let endCol = Number(cols) - 1;
    let endRow = Number(rows) - 1;
    let counter = 1;
  
    while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter;
        counter++;
      }
  
      startRow++;
      for (let j = startRow; j <= endRow; j++) {
        matrix[j][endCol] = counter;
        counter++;
      }
  
      endCol--;
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter;
        counter++;
      }
  
      endRow--;
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter;
        counter++;
      }
  
      startCol++;
    }
  
    matrix.forEach(line => console.log(line.join(' ')))
}

// spiralMatrix(5,5);
// spiralMatrix(3,3);