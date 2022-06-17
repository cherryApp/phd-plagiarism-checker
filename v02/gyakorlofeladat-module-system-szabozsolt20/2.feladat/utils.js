const generateUserList = (users) => {
  return users.map(user => {
    let obj = {};
    obj.isAdult = user > 18;
    obj.fullName = `${user.firstName} ${user.lastName}`;
    return obj;
  });
}

const getUserNames = (users) => {
  // return users.reduce((akku, current) => )
  return generateUserList(users).map(user => user.fullName).join(',');
}

module.exports = Object.freeze({
  generateUserList,
  getUserNames
})