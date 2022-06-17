const increaseDate = (date, dayNumber = 3) => date.getTime() + dayNumber * 24 * 60 * 60 * 1000

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const increaseAndFormatDate = (dateArray) =>
  dateArray.map(item => new Date(increaseDate(item))
    .toLocaleDateString('hu-HU', options)
  )

module.exports = increaseAndFormatDate
