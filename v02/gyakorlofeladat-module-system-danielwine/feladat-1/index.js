const increaseAndFormatDate = require('./utils')

const dates = [
    new Date(2020, 2, 1, 10, 00, 10),
    new Date(2020, 10, 8, 12, 00, 10),
    new Date(2021, 3, 1, 16, 30, 0),
    new Date(2021, 10, 25, 19, 00, 0)
]

const newDates = increaseAndFormatDate(dates)
console.log(newDates);
