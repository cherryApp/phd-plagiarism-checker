const utils = require('./utils')

utils.generateUserList = 1
utils.getUserNames = 2

let users = [
  {
    firstName: 'Szabó',
    lastName: 'Zsolt',
    age: 52
  },
  {
    firstName: 'Szabó',
    lastName: 'Zsolt Szabolcs',
    age: 52
  },
  {
    firstName: 'Szabó',
    lastName: 'Erzsébet Csilla',
    age: 52
  }
]
console.log(utils.getUserNames(users));

