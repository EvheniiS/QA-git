function User (email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}
var userOne = new User('ryu@ninjas. com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi')


User.prototype.login = function (){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function (){
    this.online = false;
    console.log(this.email, 'has logged out');
}

console.log (userOne);
userTwo.login();


