const increaseAndFormatDate = require('./utils')

const date1 = new Date('2022.01.20')
const date2 = new Date('2022.02.20')
const date3 = new Date('2022.03.20')

console.log(increaseAndFormatDate([date1, date2, date3]))
