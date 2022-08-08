document.querySelector('.theme__dark').addEventListener('click', () => {
    document.querySelector('.theme__dark').style.display = 'none'
    document.querySelector('.theme__light').style.display = 'flex'
    document.body.classList.add('dark__country-body')
    document.querySelector('header').classList.add('dark__country-header')
    document.querySelector('.svg').classList.add('dark-svg')
    document.querySelector('.border__countries').classList.add("border__dark-countries")
    document.querySelector('.back').classList.add('dark-back')
})

document.querySelector('.theme__light').addEventListener('click', () => {
    document.querySelector('.theme__dark').style.display = 'flex'
    document.querySelector('.theme__light').style.display = 'none'
    document.body.classList.remove('dark__country-body')
    document.querySelector('header').classList.remove('dark__country-header')
    document.querySelector('.svg').classList.remove('dark-svg')
    document.querySelector('.back').classList.remove('dark-back')
    document.querySelector('.border__countries').classList.remove("border__dark-countries")
})