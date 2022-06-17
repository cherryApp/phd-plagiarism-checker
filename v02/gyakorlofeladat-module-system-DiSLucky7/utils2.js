const generateUserList = (users) =>{
    return users.map(user => [{ isAdult: user.age > 18 ? true : false, fullName: `${user.firstName} ${user.lastName}` }])
}

const getUserNames = (users) => {
    return users.reduce((acc, curr) => acc + `${curr.firstName} ${curr.lastName}, `, '')
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})

// Hozz létre egy utils.js nevű fájlt!  
// Ebben készíts el két függvényt!

// Az első neve generateUserList, paraméterként egy user objektumokat tartalmazó tömböt vár.  
// A user objektumok

// - firstName
// - lastName
// - age tulajdonságokkal rendelkeznek.

// A függvény visszatérési értéke egy olyan új tömb, ami olyan objektumokat tartalmaz, ami a következő tulajdonságokkal rendelkezik: 

// - isAdult : a user kora alapján egy true/false érték attól függően, hogy elmúlt-e 18 éves  
// - fullName: a user teljes neve

// A getUserNames paraméterként egy user objektumokat tartalmazó tömböt vár.  

// A függvény visszatérési értéke egy olyan string, ami az összes felhasználó teljes nevét tartalmazza vesszővel elválasztva.  

// Exportáld a két függvényt ügyelve arra, hogy a későbbiekben ne lehessen felülírni őket!  

// Hozz létre egy index.js fájlt, az utils.js fájlból importálj mindent utils névvel! (Ne használj object destructuring-et!)  
// Hívd meg a generateUserList és a getUserNames függvényeket a megfelelő paramétereket megadva nekik, és a konzolra írasd ki a visszatérési értéküket!  
// Ellenőrizd, hogy valóban nem lehetséges-e felülírni őket!
