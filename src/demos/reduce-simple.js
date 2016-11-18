var numbers = [1,2,3,4];


function reducer ( memo, val){
    return memo +val;
}


var result = numbers.reduce(reducer,0);
console.log('number results', result);

result = numbers.reduce(reducer,100);
console.log('number results with initial value', result);


var names = ["sheldon", "jo", "mary", "jules"];
var nameResult =[];

for (var i = 0 ; i < names.length ; i++){
    nameResult[i] = names[i]+" is cool "
}
console.log('result with for ', nameResult );

// Do it with reduce and concat, with initial value at []
// Do it with a map then a reduce




// Interesting point on reduce vs fold : http://stackoverflow.com/a/25158790/968988












