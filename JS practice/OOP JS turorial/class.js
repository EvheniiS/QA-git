class User {
    constructor (email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    } 

    login(){
        console.log(this.email, ' Just loget in');
        return this;
    }
    logout() { 
         console.log(this.email, ' Just logged out');
         return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, ' score is now ', this.score);
        return this;
    }
}
var userOne = new User('es@gmail.com','Evhenii');
var userTwo = new User('Cris@gmail.com','Cris');



class Admin extends User{
    deleteUser(user){
        user = users.filter(u => {
            return u.email != user.email;
        })

    }

}
var admin = new Admin('Shoun@gmail.com', 'shoun');

var users = [userOne, userTwo,admin];
