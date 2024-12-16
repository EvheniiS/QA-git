class User {
    username:string;
    age:number;
}

interface Repository<T> { 
    create: (obj: T) => T;
    get: () => T;
    update: (obj: T) => T;
    delete: (obj: T) => T;

}

class UserRepo implements Repository<User>{
    create(obj: User ):User {
        return database.query(INSERT ...)

    }
    delete(obj: User ):User{
        // return undefined

    }

    get(obj: User ):User {
        // return undefined

    }

    update(obj: User ):User {
        // return undefined;

    }
}
