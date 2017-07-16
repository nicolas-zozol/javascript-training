/**
 * Note that we have here a Uppercase
 * It's just a convention
 */
function Dinosaurus(name){
    this.age = 12;
    this.name = name;
}

Dinosaurus.prototype.size = 16;
Dinosaurus.prototype.age = 65000000;

const denver = new Dinosaurus('Denver');
console.log('denver', denver, denver.age, denver.size);

// Create denver instance and TRex class. Inherit also from Carnivorus.

function Carnivorus(){

}

//Carnivorus.prototype = Object.assign({}, Dinosaurus.prototype); // DO
Carnivorus.prototype = new Dinosaurus('Carnivorus lambda');  // rather DO NOT


Carnivorus.prototype.eat = function(animal){
    console.log(this.name +'is eating '+animal.name);
};

const tRex = new Carnivorus();
console.log(tRex.size, tRex.name);
tRex.eat(denver);

//denver.eat(tRex)













