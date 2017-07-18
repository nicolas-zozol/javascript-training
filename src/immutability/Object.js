// SHALLOW copy

const user = {name:'John', age:22};

const lisa = {name:'Lisa', lastname:'Simpson'}
user.friend = lisa;

const shallowCopy = Object.assign({}, user);

console.log(shallowCopy.friend.name);

user.friend.name = 'Elisa';
// console.log(shallowCopy.friend.name);


