/*
 * Note that we avec here an Uppercase
 * it's just a convention
 * */

function Dinosaurus(name) {

    this.size = 12;
    this.name = name;

}
Dinosaurus.prototype.age = -65000000;

const denver = new Dinosaurus('Denver');
//new gives access to a prototype
const petitPied = new Dinosaurus("Petit Pied");
petitPied.size = 3;
console.log('Denver name : ', denver.name);
console.log('Denver size : ', denver.size);
console.log('Petit Pied size : ', petitPied.size);
console.log('Denver age : ', denver.age);
console.log('Petit Pied age : ', petitPied.age);

console.log('\n-------------------------------------------------------------------------------------------------------------\n');

function TRex() {
    this.name = 'Rex';
}
function Carnivore() {
}
Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' + obj.name);
};
const Bob = new Carnivore();
console.log('\n-------------------------------------------------------------------------------------------------------------\n');

//TRex.prototype = Dinosaurus.prototype;
//TRex.prototype = Carnivore.prototype;

Object.assign(TRex.prototype,Dinosaurus.prototype);
Object.assign(TRex.prototype,Carnivore.prototype);
const Rex = new TRex();
console.log('Rex age', Rex.age);
console.log('Rex size', Rex.size);
Rex.eat(petitPied);

console.log('\n---------------------------------------------------------------------------------------------------------------\n');

