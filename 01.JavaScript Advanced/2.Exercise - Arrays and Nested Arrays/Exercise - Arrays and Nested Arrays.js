//1.Print an Array with a Given Delimiter
function printArray(strArray, delimiter) {
    console.log(strArray.join(delimiter));
}
printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);

printArray(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);