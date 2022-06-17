const increaseDate = (date, days = 3) => {
    return date+(days * 24 * 60 * 60 * 1000)
};

const increaseAndFormatDate = array => {
    return array.map(item => new Intl.DateTimeFormat('hu-HU').format(increaseDate(item)))
};

module.exports = increaseAndFormatDate;