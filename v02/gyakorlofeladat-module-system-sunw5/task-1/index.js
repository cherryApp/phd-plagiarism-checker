const { increaseAndFormatDate } = require('./utils');

const dates = [1650451259307, 1650151259307, 1659451259307];

const result = increaseAndFormatDate(dates, 3);
console.log(result);
