//Az első hónap kezdetén 30 nyuszi él a völgyben.
//Az első hat hónap során mindig megduplázódik a populáció a hónap végére; ezt követően pedig megháromszorozódik.
//Írasd ki a konzolba ezeket a változásokat hónapokra lebontva, a következő szöveggel: "A Skylark Völgy nyulainak száma X a(z) Y. hónap végén."

//A két érték változásait a monthCounter és a rabbitPopulation változókkal tartja számon.
/*
A monthCounter változó kontrollálja a ciklusokat.
A program minden iteráció végén írja ki a konzolba a nyúlpopuláció pontos létszámát és az aktuális hónap sorszámát.
A program álljon le a 12. hónap végén.
*/


var rabbitPopulation = 30

for (let monthCounter = 1; monthCounter <= 6; monthCounter++) {
    rabbitPopulation = rabbitPopulation * 2
    console.log('A Skylark Völgy nyulainak száma: '+ rabbitPopulation +' a(z) '+ monthCounter+'. hónap végén')
}

for (let monthCounter = 7; monthCounter <= 12; monthCounter++) {
    rabbitPopulation = rabbitPopulation * 3
    console.log('A Skylark Völgy nyulainak száma: '+ rabbitPopulation +' a(z) '+ monthCounter+'. hónap végén')
}
