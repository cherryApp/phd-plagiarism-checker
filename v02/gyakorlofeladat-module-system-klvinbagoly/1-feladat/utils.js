const increaseDate = (date, day = 3) => {
  date.setDate(date.getDate() + day)
  return date
}

const increaseAndFormatDate = (dates) =>
  dates.map(date => {
    return increaseDate(date).toLocaleString('hu-HU', {dateStyle: 'long'})
  })

  module.exports = increaseAndFormatDate
