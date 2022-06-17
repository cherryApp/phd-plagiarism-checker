const increaseDate = (date, days = 3) => {
   const result = date.getTime() + (days * 24 * 60 * 60 *1000)
   //console.log(result)
   //date.setDate(date.getDate() + days)
   return result
}

//const date = new Date()
//increaseDate(date,10)

const increaseAndFormatDate = (dates) => {
   return dates.map(date => {
      new Intl.DateTimeFormat('hu-HU',{year: 'numeric', month: 'long', day: 'numeric'}).format(increaseDate(date))
      //console.log(date)
   })
}

//increaseAndFormatDate(dates = [date])

module.exports = Object.freeze(
   increaseAndFormatDate
)