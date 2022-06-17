const utils = require('./utils')

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 45
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 35
  },
  {
    firstName: 'William',
    lastName: 'Doe',
    age: 16
  }
]

// tries to overwrite these frozen ones.
utils.generateUserList = null
utils.getUserNames = null

console.log('result of generateUserList:', utils.generateUserList(users))
console.log('result of getUserNames:', utils.getUserNames(users))
