const utils = require('./utils');

const users = [
    {
        firstName: 'Kiss',
        lastName: 'Péter',
        age: 25
    },
    {
        firstName: 'Kiss',
        lastName: 'Géza',
        age: 11
    },
    
];

const response11 = utils.generateUserList(users);
const response12 = utils.getUserNames(users);

console.log(response11);
console.log(response12);

utils.getUserNames = () => {};
utils.generateUserList = () => {};

const response21 = utils.generateUserList(users);
const response22 = utils.getUserNames(users);

console.log(response21);
console.log(response22);

if ( JSON.stringify(response11) === JSON.stringify(response21) && response12 === response22 ) {
    console.log('Object.freeze worked perfectly');
}