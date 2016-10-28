function Dinosaurus(name) {

    this.size = 12;
    this.name = name;

}
Dinosaurus.prototype.age = -65000000;
Dinosaurus.prototype.size= 20;
const denver = new Dinosaurus('Denver');
//new gives access to a prototype
const petitPied = new Dinosaurus("Petit Pied");
petitPied.size = 3;

console.log('Denver size : ',denver.size);

console.log('\n---------------------------------------------------------------------------------------------------------------\n');
//Denver object is built from a prototype BUT denver has no prototype
//console.log('Denver prototype size : ',denver.prototype.size);
denver.size = 150;
console.log('new Denver size : ', denver.size);