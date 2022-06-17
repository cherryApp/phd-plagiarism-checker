const increaseDate = ( date, dayNum=3 ) => {
    time= new Date(date)
    return time.getTime()+dayNum*24*60*60*1000
} 


const increaseAndFormatDate = dateArr => dateArr.map( item => new Date( increaseDate( item, 3 ) ).toLocaleDateString() )

module.exports = increaseAndFormatDate