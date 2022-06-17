
const increaseDate = (date, days = 3) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);  
  return newDate.getTime();
}

const increaseAndFormatDate = (arrayOfDates, days = 3) => {
  const newArray = arrayOfDates.map(date => {
    return new Date(increaseDate(date, days)).toLocaleString('hu-HU');    
  });  
  return newArray;
}

module.exports = { increaseAndFormatDate };
