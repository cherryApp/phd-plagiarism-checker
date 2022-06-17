const utils = require('./utils')

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 33
    },
    {
        firstName: 'Andrea',
        lastName: 'Doe',
        age: 44
    },
    {
        firstName: 'Nara',
        lastName: 'Doe',
        age: 1
    },
];

console.log(utils.generateUserList(users))
console.log(utils.getUserNames(users))