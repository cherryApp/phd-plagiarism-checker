const increaseAndFormatDate = require('./utils')

const dates = [
    new Date('2021-10-28'),
    new Date('2021-11-28'),
    new Date('2021-12-28'),
    new Date('2022-01-28'),
    new Date('2022-02-28'),
];

const convertedDates = increaseAndFormatDate(dates);
console.log(convertedDates);