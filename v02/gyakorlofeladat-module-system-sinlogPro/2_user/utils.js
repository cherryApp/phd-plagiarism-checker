// user = { firstName, lastName, age }

const generateUserList = arr => arr.map(({ firstName, lastName, age }) =>
  ({
    isAdult: age >= 18,
    fullName: `${firstName} ${lastName}`
  })
)

const getUserNames = arr => generateUserList(arr).map(user => user.fullName).join(', ')

module.exports = Object.freeze({
  generateUserList,
  getUserNames
})

// Annak ellenőrzése, hogy freeze nélkül a függvények felülírhatók.
// module.exports = {
//   generateUserList,
//   getUserNames
// }
