const generateUserList = (arr = [{firstName: 'John', lastName: 'Doe', age: 30}]) =>
  arr.map(user => ({
    isAdult: user.age >= 18 ? true : false,
    fullName: `${user.firstName} ${user.lastName}`
  }))

const getUserNames = (arr = [{firstName: 'John', lastName: 'Doe', age: 30}]) =>
  generateUserList(arr).map(user => user.fullName).join(', ')

module.exports = Object.freeze({
  generateUserList,
  getUserNames
})