const increaseDate = (date, dayNumber=3) => date +dayNumber*24*60*60*1000;

const increaseAndFormatDate = (arr) => arr.map(item =>increaseDate(item) );

module.exports = {
    increaseAndFormatDate
}