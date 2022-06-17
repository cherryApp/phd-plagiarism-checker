const increaseDate = (date, incrementDays = 3) => {
    var result = new Date(date);
    result.setDate(result.getDate() + incrementDays);
    return result.getTime();
}

const increaseAndFormatDate = (dateArr = []) => {
    return dateArr.map(date => (new Date(increaseDate(date))).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: '2-digit' }) );
}

module.exports = increaseAndFormatDate;