const generateUserList = (users) => users.map(user => ({
   isAdult: user.age >= 18, 
   fullName: `${user.firstName} ${user.lastName}`
  }));

const getUserNames = users => {
  let names = '';
  users.forEach(user => {
    names += `${user.fullName},`;
  });
  return names;
}

module.exports = Object.freeze({
  generateUserList,
  getUserNames
});