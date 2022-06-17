// const generateUserObj = obj => { return { fullName: `${obj.firstName} ${obj.lastName}`, isAdult: obj.age >= 18 } }

const generateUserList = (arr = [{ firstName: '', lastName: '', age: 0 }]) => arr.map(
  obj => { return { fullName: `${obj.firstName} ${obj.lastName}`, isAdult: obj.age >= 18 } }
)

const getUserNames = (arr = [{ firstName: '', lastName: '', age: 0 }]) => {
  const userString = arr.map(obj => ` ${obj.firstName} ${obj.lastName}`)
    .toString()
    .trimStart()
  return userString
}

module.exports = Object.freeze({
  generateUserList,
  getUserNames
})
