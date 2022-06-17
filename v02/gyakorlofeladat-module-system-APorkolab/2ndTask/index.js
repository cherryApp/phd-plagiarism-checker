const {
	generateUserList,
	getUserNames
} = require('./utils');

const users = [{
		firstName: "János",
		lastName: "Kelemen",
		age: 60
	},
	{
		firstName: "Metell",
		lastName: "Babiagoriai Riparievich",
		age: 18
	},
	{
		firstName: "Ernő",
		lastName: "Tarara",
		age: 12
	}
]

console.log(generateUserList(users));
console.log(getUserNames(users));