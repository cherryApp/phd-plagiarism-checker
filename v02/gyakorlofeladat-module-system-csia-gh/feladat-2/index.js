const utils = require('./utils');

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
  }
];

const userList = utils.generateUserList(users);
console.log(userList);

const userNames = utils.getUserNames(userList);
console.log(userNames);

utils.generateUserList = null;
utils.getUserNames = null;
console.log(utils);
