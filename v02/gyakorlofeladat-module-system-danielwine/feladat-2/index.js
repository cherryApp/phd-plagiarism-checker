const userManager = require('./utils.js')

const users = [
    { firstName: 'Peter', lastName: 'Sloterdijk', age: '75' },
    { firstName: 'Eduard', lastName: 'Hartmann', age: '64' },
    { firstName: 'Dirk', lastName: 'Hohnsträter', age: '48' },
    { firstName: 'Hanna', lastName: 'Berger', age: '8' },
]

userManager.generateUserList = undefined
userManager.getUserNames = 42

console.log(userManager.generateUserList(users))
console.log(userManager.getUserNames(users))
