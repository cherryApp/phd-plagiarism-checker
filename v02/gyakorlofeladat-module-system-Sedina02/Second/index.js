const utils = require('./utils')

const usersArr = [
    { firstName: 'John', lastName: 'Doe', age: 19 },
    { firstName: 'Jane', lastName: 'Doe', age: 10 },
    { firstName: 'Johnny', lastName: 'Depp', age: 58 },
]

console.log(utils.generateUserList(usersArr))
console.log(utils.getUserNames(usersArr))