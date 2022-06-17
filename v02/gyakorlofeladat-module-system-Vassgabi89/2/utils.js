const generateUserList = (users) => {
   return users.map(user => {
      isAdult: (user.age >= 18 ? true : false)
      fullName: `${user.firstName} ${user.lastName}`
      console.log(user)
   })
}

const getUserNames = (users) => {
   users = generateUserList(users)
   const result = ''
   users.map(user => {
      result.join(user.fullName)
      result.join(', ')
      console.log(user)
   })
}

module.exports = Object.freeze({
   generateUserList,
   getUserNames
})