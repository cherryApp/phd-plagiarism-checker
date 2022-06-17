const getFullName = ({ firstName, lastName }) =>
    `${firstName} ${lastName}`

const generateUserList = (users) => {
    return users.map(user => {
        user.age >= 18
            ? user.isAdult = true
            : user.isAdult = false
        user.fullName = getFullName(user)
        return user
    })
}

const getUserNames = (users) => {
    return users.map(user => getFullName(user)).join(', ')
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
}
)
