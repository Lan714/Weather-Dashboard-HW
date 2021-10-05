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

renderCities(cities, cityName)
getWeather(cityName)
lastCity = cityName
localStorage.setItem('last', lastCity)
document.getElementById('city').value=''

})


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderCities(cities, current) {
  let list = document.getElementById('cityList')
  removeAllChildNodes(list)

  cities.forEach(element => {
    let city = document.createElement('button')
    city.type = 'button'
    if (current.toUpperCase() === element.toUpperCase()) {
      city.className = "list-group-item list-group-item-action active city"
    } else {
      city.className = "list-group-item list-group-item-action city"
    }
    city.innerHTML = element
    list.append(city)
  });

}



const API = 6526862a1809d80a03753664a86c2445
