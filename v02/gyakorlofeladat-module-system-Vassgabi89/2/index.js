const utils = require('./utils')

const users = [{
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 20
    },
    {
        firstName: 'Baby',
        lastName: 'Doe',
        age: 10
    }
]


console.log(utils.generateUserList(users))
console.log(utils.getUserNames(users))

console.log(Object.isFrozen(generateUserList))
console.log(Object.isFrozen(getUserNames))