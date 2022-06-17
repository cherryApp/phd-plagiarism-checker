const getFullName = user => `${user.firstName} ${user.lastName}`

const generateUserList = userList => userList.map(user => ({isAdult: user.age >= 18, fullName: getFullName(user)}))

const getUserNames = userList => userList
  .map(user => getFullName(user))
  .join(',')

  module.exports = Object.freeze({
    generateUserList,
    getUserNames
  })
