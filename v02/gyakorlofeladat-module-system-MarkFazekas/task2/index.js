const utils = require("./utils");

const users = [
    {
        firstName: "Sakineh",
        lastName: "Włodek",
        age: 33
    },
    {
        firstName: "Birûsk",
        lastName: "Hugo",
        age: 42
    },
    {
        firstName: "Tobin",
        lastName: "Agathe",
        age: 69
    }
]

console.log(utils.getUserNames(users))
console.log(utils.generateUserList(users))

utils.generateUserList = console.log

console.log(utils.generateUserList(users))
