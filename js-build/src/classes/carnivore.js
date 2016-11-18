
function Carnivore(name){
    this.name = name;
}

Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' + obj.name);
};

function doStuff(){
    console.log('bla blah');
}

module.exports=Carnivore;