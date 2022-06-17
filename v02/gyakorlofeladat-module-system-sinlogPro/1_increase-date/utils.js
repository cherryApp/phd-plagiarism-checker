const increaseDate = (date, days = 3) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const increaseAndFormatDate = arr => arr.map(date =>
  increaseDate(date).toLocaleString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
)

module.exports = increaseAndFormatDate
