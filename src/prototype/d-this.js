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
tRex.eat(denver);

tRex.name = 'T Rex';
tRex.eat(denver);

denver.eat = tRex.eat;
denver.eat(tRex); // object this : denver

const eating = tRex.eat;
eating(denver); // object this : {}


