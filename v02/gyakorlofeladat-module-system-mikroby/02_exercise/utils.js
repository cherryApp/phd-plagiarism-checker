const getFullName = (nameObj) => `${nameObj.firstName} ${nameObj.lastName}`

const generateUserList = (users) => users.map(item => ({
  isAdult: item.age >= 18,
  fullName: getFullName(item)
})
)

const getUserNames = (users) => users.map(item => getFullName(item)).join(',')

module.exports = Object.freeze({ generateUserList, getUserNames })
