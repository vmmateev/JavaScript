//1.Request Validator
// function fn(obj) {
//     const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
//     const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
//     const uriRegex = /(^[\w.]+$)/;
//     const messageTest = /([<>\\&'"])/;

//     if (!obj.method || !validMethods.includes(obj.method)) {
//         throw new Error(`Invalid request header: Invalid Method`);
//     }

//     if (!obj.uri || obj.uri == "" || !uriRegex.test(obj.uri)) {
//         throw new Error(`Invalid request header: Invalid URI`);
//     }

//     if (!obj.version || !validVersions.includes(obj.version)) {
//         throw new Error(`Invalid request header: Invalid Version`);
//     }

//     if (obj.message == undefined || messageTest.test(obj.message)) {
//         throw new Error(`Invalid request header: Invalid Message`);
//     }

//     return obj;
// }

//module.exports = { fn };

// console.log(fn({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));

//2.Even Or Odd
// function isOddOrEven(string) {
//     if (typeof (string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }

// module.exports = {
//     isOddOrEven
// };

//4.Math Enforcer
let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

module.exports = {
    mathEnforcer
};