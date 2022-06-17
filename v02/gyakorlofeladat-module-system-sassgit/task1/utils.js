const increaseDate = (date, dayNumber = 3) => date.getTime() + dayNumber * 24 * 3600 * 1000

const increaseAndFormatDate = dateArray => dateArray.map(date => new Date(increaseDate(date)).toLocaleDateString("hu", {year: 'numeric', month: 'long', day: 'numeric'}))

module.exports = { increaseAndFormatDate }
