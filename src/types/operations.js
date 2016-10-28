function add(a, b) {
    result = a + b;
    return result;
}

function divide(a, b) {
    result = a / b;
    return result;
}

function multiply(a, b) {
    result = a * b;
    return result;
}

var minus = function (a, b) {
    result = a - b;
    return result;
}

console.log("2 multiply by 6 : ", multiply(2, 6));
console.log("2 divide by 6 : ", divide(2, 6));
console.log("2 add to 6 : ", add(2, 6));
console.log("2 minus 6 : ", minus(2, 6));

function operation(op, x, y) {
   return op(x, y);
}
console.log('add', operation(minus, 56, 59));

var ops = [add, divide, minus, multiply]
var randomElement= ops[Math.floor(Math.random()*ops.length)];

console.log("--->"+ randomElement+" "+operation(randomElement, 17, 28));

var data = [4,3];
data.operation = function (op) {
    return op(this[0],this[1]);
};
console.log(data.operation(multiply));