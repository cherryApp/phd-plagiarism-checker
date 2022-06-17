const utils = require('./utils')

utils.generateUserList = 'generateUserList'
utils.getUserNames = 'getUserNames'

userList=[
    {
        firstName: "István",
        lastName: "Kovács",
        age: 19    
    },
    {
        firstName: "Dóra",
        lastName: "Keleti",
        age: 16    
    },
    {
        firstName: "József",
        lastName: "Tóth",
        age: 35    
    }
]

//utils.getUserNames="new value"

console.log(utils.generateUserList(userList));
console.log(utils.getUserNames(userList));