const increaseDate = (date = Date, numberOfDays = 3) => {
	//	A függvény paraméterként egy dátumot és egy napszámot vár.A napszám alapértelmezett értéke 3. A visszatérési értéke az adott dátum napszámmal megnövelt értéke, azaz az 1970 óta eltelt idő milliszekundumban.
	return date.getTime() + Math.round(numberOfDays * 24 * 60 * 60 * 1000)
}

const increaseAndFormatDate = (dates) => {
	// Készíts el egy másik függvényt increaseAndFormatDate névvel!Paraméterként egy tömböt vár, ami dátum objektumokat tartalmaz.
	// A függvény visszaad egy olyan új tömböt, ahol a dátumokhoz + 3 nap hozzá van adva, és már magyar lokalizáció szerint vannak formázva.(pl.: 2021. július 3.)
	return dates.map(date =>
		new Intl.DateTimeFormat('hu-HU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(increaseDate(date))
	)
}

module.exports = Object.freeze(increaseAndFormatDate)