
const connectButton = document.getElementById('search_button');
connectButton.addEventListener('click', countryInformation);

    // Country info
const info = document.getElementById('country_info_display');
    // flag picture.
const flagPicture = document.getElementById('showPicture');
    //to connect the handleKeypress to a getElement en eventlistener
const searchInput = document.getElementById('text_field');
searchInput.addEventListener('keypress', handleKeypress);

    // Search to use the enter key
function handleKeypress(e) {
    if (e.code === "Enter") {
        countryInformation();
        e.preventDefault();
    }
}
    //Opdracht 11
function clearInfo(remove) {
    while (remove.firstChild) {
        remove.removeChild(remove.lastChild);
    }
}

async function countryInformation() {
    const inputElement = document.getElementById('text_field');
    const userInput = inputElement.value;

    searchInput.value = "";
    clearInfo(info);
    clearInfo(flagPicture);
    const errorText = document.getElementById('error_text');
    errorText.textContent = "";

    try {
        const url = `https://restcountries.eu/rest/v2/name/${userInput}?fullText=true`;
        const response = await axios.get(url);
        const {name , subregion, population, capital, currencies, languages, flag} = response.data[0];

        //Opdracht 2 t/m 7.
        const countryName = `${name}`;
        const geographic = ` is situated in ${subregion}. It has a population of  ${(population / 1000000)} people`;
        const city = `${'. The capitol is '} ${capital}  `;
        const currenciesString = formatCurrencies(currencies);
        const languageString = getLanguage(languages);
        const countryInfo = geographic + city + currenciesString + languageString;
        const displayFlag = flag;

        // This shows all the country information.
        const countryDisplay = document.createElement('h3');
        countryDisplay.setAttribute('id', 'country_info_display');
        countryDisplay.textContent = countryInfo;
        info.appendChild(countryDisplay);

        // This shows the country flag picture
        const showPicture = document.createElement('img');
        showPicture.setAttribute('src', displayFlag);
        showPicture.setAttribute('width', '40px');
        flagPicture.appendChild(showPicture)

        const nameCountry = document.createElement('h1');
        nameCountry.setAttribute('id', 'showPicture');
        nameCountry.textContent = countryName;
        flagPicture.appendChild(nameCountry);

    } catch (error) {
        errorText.textContent = `Input not correct, Try it again!`;
    }
}
    //Opdracht 4.
    function formatCurrencies(currencyArray) {
    const currencyOne = currencyArray[0];
    const currencyTwo = currencyArray[1];

    if (currencyArray.length === 1) {
        return `and you can pay with ${currencyOne.name} `;
    } if (currencyArray.length >1) {
        return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`;
   }
}

// Opdracht 6.
function getLanguage (languageArray) {
    const languageOne = languageArray[0];
    const languageTwo = languageArray[1];
    const languageThree = languageArray[2];

    if (languageArray.length === 1) {
        return `They speak ${languageOne.name}`;
    } if (languageArray.length === 2) {
        return `They speak ${languageOne.name} and ${languageTwo.name}`;
    } if (languageArray.length === 3) {
        return `They speak ${languageOne.name}, ${languageTwo.name} and ${languageThree.name}`;
    }
}



