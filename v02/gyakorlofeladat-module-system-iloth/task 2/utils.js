const generateUserList = (users = []) => {
  return users.map((user) => {
    return {
      isAdult: user.age > 18,
      fullName: `${user.firstName} ${user.lastName}`,
    };
  });
};

const getUserNames = (users = []) => {
  return users
      .map((user) => `${user.firstName} ${user.lastName}`)
      .join(', ');
};

module.exports = Object.freeze({
  generateUserList,
  getUserNames,
});
