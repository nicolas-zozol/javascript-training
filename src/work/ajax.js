const users = $.get('http://localhost:3000/api/users/', function(users){
   console.log('receive data',users);
    users.sort((user1, user2) => user1.name.length < user2.name.length ? -1 : 1);
    displayUser(users);
});
$.get('http://localhost:3000/api/users/admins', function(admins){
    console.log('receive data',admins.map(admin => admin.name));
});
