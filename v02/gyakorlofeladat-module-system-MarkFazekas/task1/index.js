const {increaseAndFormatDate} = require('./utils');

const dates = [new Date('1920-10-20'), new Date('2022-04-27'), new Date('2022-05-11'),];

const increasedAndFormattedDates = increaseAndFormatDate(dates);

console.log(increasedAndFormattedDates)
