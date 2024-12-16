interface: UserRepo { 
    getUsers: () => User [];
    //delete,create .. 
}  

class UserMongoDBRepo {
    getUsers() => User[] {
        console.log('Connecting to mongoDB')
        return [{age: 15, username: `User from MongoDB`}]
    }
}

class UserPostgressRepo{
    getUsers() => User[] {
        console.log('Connecting to Postgress')
        return [{age: 15, username: `User from Postgress`}]
    }
}

class UserService {

    userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo;
    }
    filterUserByAge(age:number) {
        const users = this.userRepo.getUsers()
        //Some filtration logic 
        console.log(users)
    }
}

const userService = new UserService(new UserMongoDBRepo())
userService.filterUserByAge(age: 15);

