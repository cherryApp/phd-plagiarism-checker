const utils = require('./utils')

const users = [
    {
        firstName: 'Kiss',
        lastName: 'Ferenc',
        age: '38'
    },
    {
        firstName: 'Nagy',
        lastName: 'János',
        age: '42'
    },
    {
        firstName: 'Tóth',
        lastName: 'Gergő',
        age: '17'
    },
    {
        firstName: 'Fazekas',
        lastName: 'Tibor',
        age: '50'
    },
]

utils.getUserNames = 'userName'

console.log('User list: ', utils.generateUserList(users))
console.log('User names: ', utils.getUserNames(users))
