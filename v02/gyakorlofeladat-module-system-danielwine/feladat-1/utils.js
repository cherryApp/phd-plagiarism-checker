const locale = 'hu-HU';

const increaseDate = (date, numberOfDay = 3) => {
    const dateNow = new Date();
    return date.setDate(date.getDate() + numberOfDay)
}

const increaseAndFormatDate = (dates) => {
    return dates.map(date => new Intl.DateTimeFormat(locale)
        .format(date.setDate(date.getDate() + 3)))
}

module.exports = increaseAndFormatDate
