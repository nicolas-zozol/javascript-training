var string = 'Hello World';
string+= " !!";

console.log('string :', string);

var index = string.indexOf('lo');

console.log('index of lo :', index);

function contains(haystack, needle){
    return haystack.indexOf(needle)>=0;
};

var isTrue = contains('Jack', 'ack');
var isFalse = contains('MacDonals', 'ack');
var isAlsoTrue = contains('Jim', 'Jim');

console.log(isTrue, 'isTrue');
console.log(isFalse, 'isFalse');
console.log(isAlsoTrue, 'isAlsoTrue');

console.log('Jack is back'.includes("ack")); //n'existe que depuis ES2015


/*
*Expression régulière
* permet de vérfier remplissage correct de formulaire apr exemple
 */

var hello ='Hello World';
var found = hello.search(/orld/);
var alsoFound = hello.search(/world/i);
console.log('found : ', found, 'also ', alsoFound);

var x = /(.)*(world)/i.test('Hello World')
console.log('x :', x);

var strangelyTrue = /(.)*(world)/i.test('Hello World')
console.log('strangelyTrue :', strangelyTrue);

var y = /(.)*(world)$/i.test('Hello World here') //dollar pour dire que c'est à la fin
console.log('y :', y);

//substring
var string = '01234567899';
console.log('substr(3,6) :', string.substr(3,6), 'extract a string from the third position with a length of 6');
console.log('substring(3,6) :', string.substring(3,6), 'extract a string from the third position to the 6th');
