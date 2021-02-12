//1. Maak een 'Zoek'-knop op de pagina
//2. en koppel deze aan een functie
//3. die de gegevens over `België` ophaalt en dit in de console logt.
    //_Tip:_ Als de de [documentatie](https://www.npmjs.com/package/axios) bekijkt en op `async` zoekt, vindt je een voorbeeld van een GET-request.

//## 1. De gebruiker kan de knop zien
//- [ ] Zoek knop maken (HTML)v
//- [ ] id meegeven -> om met javascript te selecteren (HTML)v

//## 2. De gebruiker gaat klikken
//- [ ] Knop selecteren (getElementById, opslaan in variabele)v
//- [ ] Event listener & Event Handler toevoegen aan knop (addEventListener, click, async functie)v

//## 3. Wanneer de gebruiker klikt wordt mijn async function aangeroepen
//- [ ] Variable met maken country -> "Belgie" (hardcoden)v
   // - [ ] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${​​country}​​?fullText=truev
//- [ ] axios.get(url)v
//- [ ] await toevoegenvv
//- [ ] response -> checkenv
// const ConnectButton = document.getElementById('search_button');
// const displayCountryInfo = document.getElementById('country_info_display');
// ConnectButton.addEventListener('click', searchButton);
// displayCountryInfo.appendChild(countryInfo);
// const countryInfo = document.createElement("h1")

async function searchButton () {
    const country = 'belgie';
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    const response = await axios.get(url);

    const Geografic = ` ${response.data[0].name} is situated in ${response.data[0].subregion} . It has a population of  ${(response.data[0].population /1000000)} people.`;
    const city = `${'The capitol is '} ${response.data[0].capital}` ;
    const currency = ` ${response.data[0].currency}`;
    console.log(Geografic, city)

const getNumberOfCurrency = formatCurrencies(currency)
}
const searchCountry = searchButton();

function formatCurrencies(currencyArray) {
    const currencyOne = currencyArray[0]
    const currencyTwo = currencyArray[1]

    if (currencyOne.length === 1) {
        return `and you can pay with ${response.data[0].currency} `
    } else if (currencyTwo >1) {
        return `and you can pay with ${response.data[0].currency.length[0]}'s and ${response.data[0].currency.length[1]}'s`
    }
}





// 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
//     - 1 valuta: `and you can pay with [currency]'s`
// - 2 valuta's: `and you can pay with [currency]'s and [currency]'s`
// - [ ] Goed in de data kijken, waar zit deze info: -> loggen
// - [ ] variabele maken, en de currencies uit de data daaraan toekennen
// - [ ] functie maken -> formatCurrencies
// - [ ] aanroepen -> logje in de functie zetten om te checken
// - [ ] input: currencies, parameter(s) toevoegen, argument(en) meegeven
// - [ ] parameter loggen om te kijken of de input hebben
// - [ ] if
// - [ ] 1 currency -> `and you can pay with [currency]'s`
// - [ ] 2 currency -> `and you can pay with [currency]'s and [currency]'s`
// - [ ] return de waarde `and you can pay with [currency]'s and [currency]'s`

// 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
//     * 1 valuta: `and you can pay with [currency]'s`
// * 2 valuta's: `and you can pay with [currency]'s and [currency]'s`
// 5. Check of alles nog steeds werkt als je de gegevens over _Aruba_ of _Duitsland_ ophaalt!
//     6. _Bonusopdracht:_ Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
//     * 1 taal: `They speak [language]`
// * 2 talen: `They speak [language] and [language]`
// * 3 talen: `They speak [language], [language] and [language]`
// * etc.
// 7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:


