const increaseDate = (date, days = 3) => {
  date.setDate(date.getDate() + days);

  return date.getTime();
}

const increaseAndFormatDate = (dates) => {
  return dates.map(
    date => {
      date.setDate(date.getDate() + 3);
      return date.toLocaleDateString('hu')
    }
  );
}


module.exports = increaseAndFormatDate;
