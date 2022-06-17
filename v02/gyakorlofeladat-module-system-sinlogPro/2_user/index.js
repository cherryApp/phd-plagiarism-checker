const utils = require('./utils')

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 28
  },
  {
    firstName: 'Taylor',
    lastName: 'Smith',
    age: 42
  },
  {
    firstName: 'Tom',
    lastName: 'Black',
    age: 58
  },
  {
    firstName: 'Enny',
    lastName: 'Red',
    age: 15
  }
]

console.log(utils.generateUserList(users))

console.log(utils.getUserNames(users))

console.log('-----------------------------------------')

// Ellenőrzés, hogy a függvények nem írhatóak felül.
utils.generateUserList = 2
utils.getUserNames = 'rewrite'

console.log(utils.generateUserList)
console.log(utils.getUserNames)
