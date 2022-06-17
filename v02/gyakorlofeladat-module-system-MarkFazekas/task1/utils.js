const increaseDate = (date, numberOfDays = 3) => {
    date.setDate(date.getDate() + numberOfDays);
    return date;
}

const hungarianFormat = { year: 'numeric', month: 'long', day: 'numeric' };
const dateTimeFormat = new Intl.DateTimeFormat('hu-HU', hungarianFormat)

const increaseAndFormatDate = (dateArray) => dateArray.map(date => dateTimeFormat.format(increaseDate(date, 3)))

module.exports = Object.freeze({increaseAndFormatDate})
