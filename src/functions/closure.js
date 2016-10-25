var denver = {
    name:"denver",
    age: 12
};
var petitPied = {
    name:"denver",
    age: 6555
};
function pure(a,b){
    //a.age=15; pas pure on change a
    return a.age+b.age; //pure on change ni a ni b
}

console.log('pure : ',pure(denver,petitPied));

function unpure() {
    //condole.log ou screen() : modifie une string   depend d'un contexte externe (pas d'arguments) donc fonction impure
    console.log('kick'+petitPied.name);
}

unpure();