const increaseDate = (date, days = 3) => {
  time = new Date(date)
  return time.getTime() + days * 24 * 60 * 60 * 1000
}

const increaseAndFormatDate = (dates = []) => {
  dates.map(item => 
    new Date(increaseDate(item, 3)).toLocaleDateString('hu-HU'))
}

module.exports = Object.freeze({
    increaseAndFormatDate
})