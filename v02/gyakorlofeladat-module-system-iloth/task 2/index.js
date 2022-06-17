const utils = require('./utils');

const users = [
  {age: 16, firstName: 'Alma', lastName: 'Mater'},
  {age: 20, firstName: 'Senki', lastName: 'Házi'},
  {age: 21, firstName: 'Mekk', lastName: 'Elek'},
];

console.log(utils.generateUserList(users));
console.log(utils.getUserNames(users));
