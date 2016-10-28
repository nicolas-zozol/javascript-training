var users= require('../Data').users;

users.forEach(function(user){
  console.log('user name : ',user.name);
});

users.forEach( user => console.log("-->",user.name));


var admins = [];
var noadmins = [];


users.forEach(function(user){
    if (user.admin===true) {
        admins.push(user.name)
    }
    else{
        noadmins.push(user.name)
    }
});
console.log('admins : ',admins);
console.log('noadmins : ',noadmins);

