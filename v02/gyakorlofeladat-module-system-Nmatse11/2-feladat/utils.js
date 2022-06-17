const generateUserList = arr => 
  arr.map(item => ({
    isAdult: item.age >= 18,
    fullName: `${item.firstName} ${item.lastName}`
  })
)

const getUserNames = arr => {
  return arr.map(item => `${item.firstName} ${item.lastName}`).join(', ')
}

module.exports = Object.freeze({
  generateUserList,
  getUserNames
})
