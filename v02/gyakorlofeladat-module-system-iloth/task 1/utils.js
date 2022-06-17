/* eslint-disable new-cap */

const increaseDate = (date, days = 3) => {
  date.setDate(date.getDate() + days);
  return date;
};

const increaseAndFormatDate = (dates = []) => {
  return dates.map((date) => Intl.DateTimeFormat('hu-hu').format(increaseDate(date)));
};

module.exports = {
  increaseAndFormatDate,
};
