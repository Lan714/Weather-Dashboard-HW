let cities = JSON.parse(localStorage.getItems('cities')) || []
let lastCity - (localStorage.getItem('last')) || ""

renderCities(cities, lastCity)

document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()

  let cityName = document.getElementById('city').value
  let duplicate = false
  cities.forEach(element => {
    if (element.toUpperCase() === cityName.toUpperCase()) {
      duplicate = true
    }
  })
  if (duplicate = false) {
    cities.push(cityName)
    localStorage.setItem('cities', JSON.stringify(cities))
  }
  
})


const API = 6526862a1809d80a03753664a86c2445
