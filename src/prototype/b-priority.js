function Dinosaurus(name){
    this.size = 12;
    this.name = name;
}
Dinosaurus.prototype.age = -65000000;
Dinosaurus.prototype.size = 20;

const denver = new Dinosaurus('Denver');

// Explain priority between object and its (hidden) prototype
// What if we dinamically change the prototype
    // - of course, it's not a good idea