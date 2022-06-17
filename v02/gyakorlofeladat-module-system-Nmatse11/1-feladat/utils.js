const increaseDate = (date, number = 3) => date.setDate(date.getDate() + number)

const increaseAndFormatDate = arr => {
    const format = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  return arr.map(item => new Date(increaseDate(item)).toLocaleDateString('hu', format))
}

module.exports = {
  increaseAndFormatDate
}
