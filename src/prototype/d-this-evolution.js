function Dinosaurus(name) {
    this.size = 12;
    this.name = name;
}
Dinosaurus.prototype.age = -65000000;
Dinosaurus.prototype.color = 'green';

Dinosaurus.prototype.evolve = function (how) {
    console.log(this.name + ' is Evolving');
    how();
    console.log('Evolution completed to a new era');
};


const denver = new Dinosaurus('Denver');
console.log(denver.size, denver.color);

denver.evolve( function(){
    this.size ++;
    this.color = 'red'
});

// No evolution :(
console.log(denver.size, denver.color);

// not so horrible
function denverEvolution(){
    this.size ++;
    this.color = 'red'
}
const boundEvolution = denverEvolution.bind(denver)
denver.evolve( boundEvolution);

// Oui-evolution
console.log(denver.size, denver.color);



// Shorter; horribler
denver.evolve( function(){
    this.size ++;
    this.color = 'yellow'
}.bind(denver)  );

// Oui-evolution
console.log(denver.size, denver.color);



