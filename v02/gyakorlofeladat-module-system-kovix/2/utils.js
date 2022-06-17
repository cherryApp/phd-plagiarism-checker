const generateUserList = (userList = []) => userList.map(user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    isAdult: user.age >= 18
}));

const getUserNames = (userObj = []) => generateUserList(userObj).map(user => user.fullName).join(', ');

module.exports = Object.freeze({
    generateUserList,
    getUserNames
});