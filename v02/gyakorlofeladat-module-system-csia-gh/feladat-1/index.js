const { increaseAndFormatDate } = require('./utils');

const dates = [new Date('October 12, 2019 11:50:10'), new Date('October 8, 2022 11:50:10')];

console.log(increaseAndFormatDate(dates));