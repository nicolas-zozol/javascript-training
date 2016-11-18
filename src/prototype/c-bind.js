function Dinosaurus(name){
    this.size = 12;
    this.name = name;
}
Dinosaurus.prototype.age = -65000000;

const denver = new Dinosaurus('Denver');

function Carnivore(){
}

Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' + obj.name);
};

const tRex = new Carnivore();
tRex.name = 'T Rex';

//modification :
const eating = tRex.eat;

// What is the result ? Why ?
// Show the f.apply(this, ...) function

