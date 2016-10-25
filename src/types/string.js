var string = "hello world";
string += " !";
console.log('string : ' + string);

var index = string.indexOf('lo');
console.log('index of lo : ', index);

function contains(haystack, needle) {
    return haystack.indexOf(needle) != -1;
}

var isTrue = contains("Jack", "ack");
var isFalse = contains("Mac Donalds", "ack");
var isAlsoTrue = contains("Jim", "Jim");

console.log(isTrue, isAlsoTrue, isFalse);
console.log('Jack is back'.includes("ack"));

/**
 * Expression Reguliere
 *
 */
//i case insensitive

var hello = "hello world";
var found = hello.search(/orl/);
var alsoFound = hello.search(/worl/i);
console.log('found : ',found, " also ",alsoFound);


var x = /(.)*(world)/i.test("hello world");
console.log('x : ', x);

var strangelyTrue = /(.)*(world)/i.test("hello World here");
console.log('y : ', strangelyTrue);

var moreStrict = /(.)*(world)$/i.test("hello world here"); //$ impose que world soit a la fin
console.log('y : ', moreStrict);

//Substring()
//Substring (index 1 index 2,"string")
// copy each letters of the string from the letter at position "index1" to the letter at position index2.


//substr()
//Substring (index 1 index 2,"string")
// copy a string of size="index 2" of the "string" from the letter of index1.

var str = "Je NE ComprenD RIEN a ce que je Dois Faire";
var res = str.toUpperCase(); // met lettre en majuscule si elles sont en miniscule sinon les laisse en majuscule (cf table ASCII)
console.log(res);

var str = "Je NE ComprenD RIEN a ce que je Dois Faire";
var res = str.toLowerCase(); // met lettre en minuscule si elles sont en majuscules sinon les laisse en mini (cf table ASCII)
console.log(res);

// trim() enleve tous les espaces avant et apres la chaine de caractères.

