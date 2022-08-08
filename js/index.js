const li = document.querySelectorAll('li')
const input = document.querySelector('#search__countries')
let countriesArray

window.addEventListener('load', () => {
    consumeApi()
})

document.querySelector('#search__countries').addEventListener('input', () => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(countries => {
        document.querySelector('.countries').innerHTML = ""

        const filterCharacter = countries.filter( (value)=> {
          return (value.name.common).toLowerCase().includes(input.value.toLowerCase())
    
        })
    
        createElements(filterCharacter)
    })
})


li.forEach(elements => {
    elements.addEventListener('click', createFilteringElements)
})

function consumeApi() {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response => response.json())
    .then(countries => {
        createElements(countries)
    })
}

function createElements(countries) {
    document.querySelector('.countries').style.visibility = 'visible'
    document.querySelector('.container-loading').style.display = 'none'
    countries.forEach(el => {
        const countryInformation = document.createElement('div')
        const countryName = document.createElement('p')
        const countryRegion = document.createElement('p')
        const countryPopulation = document.createElement('p')
        const countryCapital = document.createElement('p')
        const countryFlag = document.createElement('img')
    
        countryInformation.classList.add('country__information')
        countryName.classList.add('country__name')
    
        const information = document.querySelectorAll('.country__information')
    
        information.forEach(element => {
            element.addEventListener('click', nextCountryInformationPage)
        })
    
        countryFlag.src = el.flags.png
        countryFlag.setAttribute("alt", `${el.name.common} flag`)
        countryName.innerText = el.name.common
        countryPopulation.innerHTML = `<span>Population:</span> ${el.population.toLocaleString()}`
        countryRegion.innerHTML = `<span>Region:</span> ${el.region}`
        countryCapital.innerHTML = `<span>Capital:</span> ${el.capital}`
    
        countryInformation.appendChild(countryName)
        countryInformation.appendChild(countryFlag)
        countryInformation.appendChild(countryPopulation)
        countryInformation.appendChild(countryRegion)
        countryInformation.appendChild(countryCapital)
        document.querySelector('.countries').appendChild(countryInformation)
    })
}

function createFilteringElements(e)  {
    document.querySelector('.countries').innerHTML = ''
    const equal = e.target.getAttribute('value') === 'all'
    if(equal) {
        document.querySelector('.countries').style.visibility = 'hidden'
        document.querySelector('.container-loading').style.display = 'flex'
        document.querySelector('.countries').style.visibility = 'visible'
        document.querySelector('.container-loading').style.display = 'none'
        consumeApi()
    } else {
        document.querySelector('.container-loading').style.display = 'flex'
        document.querySelector('.countries').style.visibility = 'visible'
        document.querySelector('.container-loading').style.display = 'none'
        fetch(`https://restcountries.com/v3.1/region/${e.target.getAttribute('value')}`)
        .then(response => response.json())
        .then(countries => {
            createElements(countries)
        })
    }
}

function nextCountryInformationPage(e) {
    if(e.target.parentElement.firstElementChild.classList.contains('country__name')) {
        window.location = `page/details.html?country=${e.target.parentElement.firstElementChild.innerText}`
    } else {
        return false
    }
}
