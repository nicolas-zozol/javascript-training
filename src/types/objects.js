/*var x={};
console.log("x ; ",x, typeof x);*/

var john = {
    name : "john",
    address : "London",
    friends : [{name : "Jim",  age : 12},{name : "Jules",  age : 13, friends:{name : "Julia"}}]
    };
console.log("Adresse de john : ",john.address);
console.log("--> age de jim :",john.friends.age);
console.log(john.friends[1].friends);

var funkyCop = {
    name : "Robocop"
};
var ennemy = {
    name : "Dick"
};

funkyCop.foe = ennemy;
console.log('funky : ', funkyCop);

ennemy.foe = funkyCop;
funkyCop.name = "Venere Robocop";

ennemy.dead = true;
delete funkyCop.foe;

console.log("funky now : ", funkyCop);







var strange ={"----" : "strange key"};
console.log("strange",strange);
console.log("normal : ", funkyCop.name, " <-- ou --> ",funkyCop["name"]);