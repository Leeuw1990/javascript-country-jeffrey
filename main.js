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

    //Opdracht 1.
const connectButton = document.getElementById('search_button');
connectButton.addEventListener('click', searchButton);

    // Country info
const info = document.getElementById('country_info_display');
    // flag picture.
const flagPicture = document.getElementById('showPicture');
    //to connect the handleKeypress to a getElement en eventlistener
const searchInput = document.getElementById('text_field')
searchInput.addEventListener('keypress', handleKeypress)

    // Search to use the enter key
function handleKeypress(event) {
    if (event.code === "Enter") {
        searchButton()
    }
}
    //Opdracht 11
function clearInfo(remove) {
    while (remove.firstChild) {
        remove.removeChild(remove.lastChild)
    }
}

async function searchButton() {
    const inputElement = document.getElementById('text_field')
    const userInput = inputElement.value

    searchInput.value = "";
    clearInfo(info);
    clearInfo(flagPicture);
    const errorText = document.getElementById('error_text');
    errorText.textContent = "";

    try {
        const url = `https://restcountries.eu/rest/v2/name/${userInput}?fullText=true`;
        const response = await axios.get(url);
        const countryData = response.data[0]

        //Opdracht 2 t/m 7.
        const geographic = ` ${countryData.name} is situated in ${countryData.subregion}. It has a population of  ${(countryData.population / 1000000)} people`;
        const city = `${'. The capitol is '} ${countryData.capital}  `;
        const currencies = countryData.currencies;
        const currenciesString = formatCurrencies(currencies);
        const languages = countryData.languages;
        const languageString = getLanguage(languages);
        const countryInfo = geographic + city + currenciesString + languageString;
        const displayFlag = countryData.flag;

        // This shows all the country information.
        const countryDisplay = document.createElement('h3');
        countryDisplay.setAttribute('id', 'country_info_display');
        countryDisplay.textContent = countryInfo;
        info.appendChild(countryDisplay);

        // This shows the country flag picture
        const showPicture = document.createElement('img');
        showPicture.setAttribute('src', displayFlag);
        showPicture.setAttribute('width', '50px');
        flagPicture.appendChild(showPicture)

    } catch (error) {
        console.log('Error')
        errorText.textContent = `Input not correct, Try it again!`
    }
}
    //Opdracht 4.
    function formatCurrencies(currencyArray) {
    const currencyOne = currencyArray[0]
    const currencyTwo = currencyArray[1]

    if (currencyArray.length === 1) {
        return `and you can pay with ${currencyOne.name} `
    } if (currencyArray.length >1) {
        return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
   }
}

// Opdracht 6.
function getLanguage (languageArray) {
    const languageOne = languageArray[0]
    const languageTwo = languageArray[1]
    const languageThree = languageArray[2]

    if (languageArray.length === 1) {
        return `They speak ${languageOne.name}`
    } if (languageArray.length === 2) {
        return `They speak ${languageOne.name} and ${languageTwo.name}`
    } if (languageArray.length === 3) {
        return `They speak ${languageOne.name}, ${languageTwo.name} and ${languageThree.name}`
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


