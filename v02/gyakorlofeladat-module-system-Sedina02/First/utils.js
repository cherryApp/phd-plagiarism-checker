const increaseDate = (date, days = 3) => (date.getTime() + days * 86400000)

const increaseAndFormatDate = (array = {}) => array
  .map(date => new Date(increaseDate(date)).toLocaleDateString('hu', { year: 'numeric', month: 'long', day: 'numeric' }))

module.exports.increaseAndFormatDate = increaseAndFormatDate