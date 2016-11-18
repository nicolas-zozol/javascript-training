/**
 * Note that we have here a Uppercase
 * It's just a convention
 */
function Dinosaurus(name){
    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -65000000;

const denver = new Dinosaurus('Denver');
console.log('denver', denver, denver.age);

// Create denver instance and TRex class. Inherit also from Carnivore.
