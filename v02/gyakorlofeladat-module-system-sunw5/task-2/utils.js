const generateUserList = (users = [{firstName: '', lastName: '', age: 0,}]) => {
  let result= [];

  users.forEach(user => {
    if (user.age >= 18) {
      result.push({isAdult: true, fullName: `${user.firstName} ${user.lastName}`});
    } else {
      result.push({isAdult: false, fullName: `${user.firstName} ${user.lastName}`});
    }
  })
  return result;
}

const getUserNames = (users) => {
  let result = [];
  users.forEach(user => {
    result.push(`${user.firstName} ${user.lastName}`);
  })
  return result;
}
Object.freeze(generateUserList);
Object.freeze(getUserNames);

module.exports = { generateUserList, getUserNames }
