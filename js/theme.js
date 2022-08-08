document.querySelector('.header__theme-dark').addEventListener('click', () => {
    document.querySelector('.header__theme-dark').style.display = 'none'
    document.querySelector('.header__theme-light').style.display = 'flex'
    document.body.classList.add('dark__body')
    document.querySelector('header').classList.add('dark__header')
    document.querySelectorAll('.country__information').forEach(el => {
        el.classList.add('dark__country-information')
    })
    document.querySelectorAll('.country__information>span').forEach(el => {
        el.classList.add('dark__span')
    })
    document.querySelector('.input__search-countries').classList.add('dark__input')
    document.querySelector('.details').classList.add('dark__details')
    document.querySelector('.region__list').classList.add('dark__region-list')
})

document.querySelector('.header__theme-light').addEventListener('click', () => {
    document.querySelector('.header__theme-dark').style.display = 'flex'
    document.querySelector('.header__theme-light').style.display = 'none'
    document.body.classList.remove('dark__body')
    document.querySelector('header').classList.remove('dark__header')
    document.querySelector('.input__search-countries').classList.remove('dark__input')
    document.querySelector('.details').classList.remove('dark__details')
    document.querySelectorAll('.country__information').forEach(el => {
        el.classList.remove('dark__country-information')
    })
    document.querySelectorAll('.country__information>span').forEach(el => {
        el.classList.remove('dark__span')
    })
    document.querySelector('.region__list').classList.remove('dark__region-list')
})