const urlParam = new URLSearchParams(window.location.search)
const countryParam = urlParam.get('country')

window.addEventListener("load", () => {
    consumeApi()
})

function consumeApi() {
    fetch(`https://restcountries.com/v3.1/name/${countryParam}`)
    .then(response => response.json())
    .then(country => {
        country.forEach(el => {
            const { currencies, languages, borders } = el
            document.querySelector('.country-img').src = el.flags.png
            document.querySelector('.country-img').setAttribute('alt', `${countryParam} flag`)
            document.querySelector('.country__name').innerText = `${el.name.common} (${el.name.official})`
            document.querySelector('.native__name').innerHTML = `<span>Native Name:</span> ${el.name.common}`
            document.querySelector('.population').innerHTML = `<span>Population:</span> ${el.population.toLocaleString()}`
            document.querySelector('.region').innerHTML = `<span>Region:</span> ${el.region}`
            document.querySelector('.sub__region').innerHTML = `<span>Sub Region:</span> ${el.subregion}`
            document.querySelector('.capital').innerHTML = `<span>Capital:</span> ${el.capital}`
            document.querySelector('.domain').innerHTML = `<span>Top Level Domain:</span> ${el.tld}`
            for(currencie in currencies) {
                document.querySelector('.currencies').innerHTML = `<span>Currencies:</span> ${currencies[currencie].name}`
            }
            document.querySelector('.languages').innerHTML = `<span>Languages: </span> ${Object.values(languages)[0]}, ${Object.values(languages)[1] === undefined ? '' : Object.values(languages)[1]} ${Object.values(languages)[2] === undefined ? '' :  Object.values(languages)[2]}`

            if(borders === undefined) {
                const bordersCountries = document.createElement('p')
        
                bordersCountries.innerHTML = 'No borders country'
                document.querySelector('.border__countries').appendChild(bordersCountries)
            } else {
                borders.forEach(element => {
                    const bordersCountries = document.createElement('p')
        
                    bordersCountries.innerHTML = element
                    document.querySelector('.border__countries').appendChild(bordersCountries)
                })
            }
        })
    })
}

document.querySelector('.back').addEventListener('click', () => {
    window.location = '../index.html'
})