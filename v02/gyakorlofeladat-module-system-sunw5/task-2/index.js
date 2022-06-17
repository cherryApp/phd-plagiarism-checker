const generateUserList = require('./utils').generateUserList;
const getUserNames = require('./utils').getUserNames;

getUserNames.prop = 10;

const users = [
  { firstName: 'John', lastName: 'Doe', age: 20 },
  { firstName: 'Jane', lastName: 'Doe', age: 18 },
  { firstName: 'Joe', lastName: 'Doe', age: 17 },
  { firstName: 'Jack', lastName: 'Doe', age: 16 },
  { firstName: 'Jill', lastName: 'Doe', age: 15 },
];

console.log('Log --> generateUserList:\n', generateUserList(users));
console.log('Log --> getUserNames:\n', getUserNames(users));
console.log('Log --> getUserNames.prop:\n', getUserNames.prop);
console.log('Log --> getUserNames is Frozen:', Object.isFrozen(getUserNames));