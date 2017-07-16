var numbers = [1,2,3,4];


function reducer ( memo, val){
    return memo +val;
}


var result = numbers.reduce(reducer,0);
result = numbers.reduce(reducer,100);


// console.log(result);


const users = [{name:'Jo', money:1000}, {name:'Jack', money:100},
    {name:'Jules', money:120}, {name:'Jane', money:2000}, {name:'Jim', money:80}];





const sumReducer = (memo, element) => memo+element.money;
const maxReducer = undefined;

const reduceResult = users.reduce( sumReducer, 0);

// Use the maxReducer
// User map/reduce
// Interesting point on reduce vs fold : http://stackoverflow.com/a/25158790/968988
// Look at James Dean facts











