//creation.js
const Carnivore = require('../classes/carnivore')
const Dinosaurus = require('../classes/dinosaurus');

// const _ = require('underscore');


const tRex = new Carnivore('TRex');
const serra = new Carnivore('serra');

const gentil = new Carnivore('TRex');
gentil.nice = true;

const carnivores = [tRex, serra, gentil];
console.log(carnivores);


/*
const group = _.groupBy(carnivores, 'name');

console.log('group : ', group);

tRex.eat({name : 'Lapin'});





module.exports={
    Carnivore : Carnivore,
    Dinosaurus : Dinosaurus,
    gentil : gentil
};
*/