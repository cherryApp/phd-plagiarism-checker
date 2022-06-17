const { increaseAndFormatDate } = require('./utils')

const dateArray = [new Date(2011, 6, 5), new Date(2021, 5, 30), new Date(2001, 11, 30)]

const result = increaseAndFormatDate(dateArray)
console.log(result)
