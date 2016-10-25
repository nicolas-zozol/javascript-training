

console.log('2+3 ', add(2,3));

//lui peut pas se mettre après
var mult = function (a,b) {
    return a*b;
}
console.log('4x3 ', mult(4,3));

//lui peut se mettre après
function add (a,b){
    return a+b;
}

// fat arrow
var divide = (a,b) => a/b;
console.log("6 / 3 : "+divide(6,3));