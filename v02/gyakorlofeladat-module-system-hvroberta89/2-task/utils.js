const generateUserList = userList => userList
    .map( user => ({
        isAdult: user.age>18, 
        fullName: `${user.firstName} ${user.lastName}`
    }))

const getUserNames = userList =>  userList
    .map(user => `${user.firstName} ${user.lastName}`)
    .join(',')

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})