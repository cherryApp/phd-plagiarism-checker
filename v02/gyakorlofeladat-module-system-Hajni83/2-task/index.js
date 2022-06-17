const utils = require ('./utils')

const arr = [{firstName: 'John', lastName: 'Doe', age: 40}, 
            {firstName: 'Chris', lastName: 'Brown', age: 40}];


console.log(utils.generateUserList(arr));
console.log(utils.getUserNames(arr));

utils.generateUserList = 'userList';
utils.getUserNames = 'userNames';