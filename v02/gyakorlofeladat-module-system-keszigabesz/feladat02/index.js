const utils = require('./utils');

const users = [
    {firstName: 'Bill', lastName: 'Kovacs', age:18}, 
    {firstName: 'William', lastName: 'Smith', age: 17}
];

utils.generateUserList = 2;
utils.getUserNames = 3;

console.log(utils.getUserNames(users));
console.log(utils.generateUserList (users));