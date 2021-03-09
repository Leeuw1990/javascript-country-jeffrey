// 2. Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.

// 1 [] Maak een functie
// 2 [] Haal met axios populatie land op.
// 3 [] Gebruik sort om populatie van laag naar hoog op te halen.
// 4 [] return de waarde

listCountry = document.getElementById('listOfCountries');


async function getCountry () {
    try {
        const url = `https://restcountries.eu/rest/v2/all`;
        const responseTwo = await axios.get(url)
        const {data} = responseTwo

        data.sort((lowPop, highPop) => {
            return lowPop.population - highPop.population
        });

        data.map((country) => {
            const {flag, name, region, population} = country

            const countryData = document.createElement('li');
            countryData.setAttribute('class', 'country-clickable');

            // append flag.
            const appendFlag = document.createElement('img');
            appendFlag.setAttribute('src', flag);
            appendFlag.setAttribute('class', 'flag');
            countryData.appendChild(appendFlag);

            // append name.
            const appendName = document.createElement('span');
            appendName.textContent = name;
            appendName.setAttribute('class', colorText(region));
            countryData.appendChild(appendName);

            // append region

            // append population

            listCountry.appendChild(countryData);
        });


        } catch (error){

    }
}
getCountry();

// 5. De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt.
//     Maak hier een aparte functie voor. Een land ligt altijd in één van de volgende vijf contintenten,
//     maar een uitzondering kan voorkomen:
//     Africa: blauw
//      Americas: groen
//      Asia: rood
//      Europe: geel
//      Oceania: paars

function colorText (getRegion) {
    switch (getRegion) {
        case 'Africa':
            return 'blue'
        case "Americas":
            return 'green';
        case "Asia":
            return 'red';
        case "Europe":
            return 'yellow';
        case "Oceania":
            return "purple";
        default:
            return "black"
    }
}





