const increaseDate = (date, numOfday = 3) => date.setDate(date.getDate() + numOfday)
const increaseAndFormatDate = (arr) => arr.map(date => new Date(increaseDate(date, 3)).toLocaleDateString('hu'))

module.exports = {
  increaseAndFormatDate
}