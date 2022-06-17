const increaseDate = (date, day = 3) => Date.UTC(date) + day * 24 * 60 * 60 * 1000

const increaseAndFormatDate = (arr, day = 3) => {
  return arr.map(dateObj => Object.values(dateObj))
    .map(dateArr => new Date(Date.UTC(...dateArr) + day * 24 * 60 * 60 * 1000)
      .toLocaleDateString('hu-HU'))
}

module.exports = increaseAndFormatDate
