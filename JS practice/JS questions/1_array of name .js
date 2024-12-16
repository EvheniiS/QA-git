//? 1 Write code to get array of names from  given array of users 
//? 2 Get back only active users  
//? 3. Sort users by age

const users =  [
    {
        id: 1,
        name:" Jack",
        isActive: true,

    },
    {
        id: 2,
        name:" John",
        isActive: true,

    },
    {
        id: 3,
        name:" Arthur",
        isActive: false,
    },

];

const names = users
.sort((user1, user2) => (user1.age < user2.age ? -1 : 1)) //? 3
.filter(user => user.isActive) //? 2
.map(user => user.name); //? 1

// const names = []
// users.forEach( (user) => {
//     names.push(user.name)
// });
// users.sort((user1, user2) => (user1.age < user2.age ? -1 : 1));
// const names = [];
// for(let i = 0 ; i < users.length; i++) { 
//     if(users[i].isActive ) {
//     names.push(users[i].name)
//     }
// }
console.log('names', names);
