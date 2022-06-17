const generateUserList = (users) =>
	users.map((element) => ({
		isAdult: (element.age >= 18) ? "true" : "false",
		fullName: `${element.firstName} ${element.lastName}`
	}));


const getUserNames = (users) =>
	users.map(element => `${element.firstName} ${element.lastName}`).join(', ');

Object.freeze(getUserNames);
Object.freeze(generateUserList);

module.exports = {
	generateUserList,
	getUserNames
};