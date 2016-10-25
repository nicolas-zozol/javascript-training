/*var x = [0, 3, 5, 6, 10, 12, -12, 45, 34];
console.log("first : ", x[0]);
x[2] = -42 // modify array

x[-2] = "whats ???"
console.log(x[-2]);

x[150]= 149;
console.log(x);
*/

var x = [0, 3, 5, 6, -10, 12, -12, 45, 34];

//x.push(20);
//x.pop(); supprime
//x.push(200);  ajoute
//x.shift(); supprime premier element
x.sort();//trie
//x.unshift(4); ajoute au debut


console.log('x sorted : ', x);

x.sort(function(a,b){
    if(a<b){
        return -1;
    } else if (a>b) {
        return 1;
    }
    return 0;
});
console.log('x correctly tried : ', x);

/*var sortFunction = (a, b) => a < b ? -1 : 1;
x.sort(sortFunction);
console.log('ES 2015 sorted : ', x);

//var z == 2<10 ? "little" : "big"; ?--> elvis operator
//console.log(z);

var filterref = x.filter(function (number) { //var mutatif cree un nouveau tableau
    return number <0;
});
console.log("inferieur  a zero : ", filterref);


var fat = (number) => number >= 0;
console.log(x.filter(fat));*/
