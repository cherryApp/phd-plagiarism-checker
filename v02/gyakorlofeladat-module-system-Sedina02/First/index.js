const { increaseAndFormatDate } = require('./utils')

const datesArr = [
    new Date(Date.now()),
    new Date('1997-09-20T15:40'),
    new Date('2019-10-07T07:34')
]

console.log(increaseAndFormatDate(datesArr))
