const generateUserList = (users) => users
    .map(user =>(
        {
            isAdult: user.age > 18,
            fullName: `${user.firstName} ${user.lastName}` 
        }
    ))

const getUserNames = (users = {}) => users
    .map(
        user => `${user.firstName} ${user.lastName}`)
    .join(', ');

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})
