const utils = require('./utils')

const userList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 44
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 40
  },
  {
    firstName: 'Bob',
    lastName: 'Doe',
    age: 11
  }
]

const resultOfgenerateUserList = utils.generateUserList(userList)

const resultOfgetUserNames = utils.getUserNames(userList)

console.log('Result of generateUserList:', resultOfgenerateUserList)

console.log('Result of getUserNames:', resultOfgetUserNames)

const generateUserList = utils.generateUserList
const getUserNames = utils.getUserNames
utils.generateUserList = () => {}
utils.getUserNames = () => {}

console.log('Functions cannot be overwritten:', utils.generateUserList === generateUserList, utils.getUserNames === getUserNames)
