const API = d91f911bcf2c0f925fb6535547a5ddc9


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

  document.addEventListener('click', event => {
    if ( event.target.classList.contains('city')) {
      let cityName = event.target.innerHtml
      console.log(cityName)
      lastCity = cityName
      renderCities(cities, cityName)
      getWeather(cityName)
      localStorage.setItem('last', lastCity)
    }

  })

  const getWeather = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${API}`)
    .then(res => {
      let icon = res.data.weather[0].icon;

      let erase = document.getElementById('todaysWeather')
      removeAllChildNodes(erase)
      console.log(res.data)
      let container = document.createElement('div')
      let header = document.createElement('h3')
      header.innerHTML = `
      ${res.data.name}
      ${moment().format(`1`)}
      <img id=""wicon" src="http://openweathermap.org/img/w/${icon}.png" alt="Weather icon">
      `

      container.append(header)
      let temperature = document.createElement('p')
      temperature.textContent = `Temperature: ${res.data.main.temp} F°`
      container.append(temperature)
      let humdity = document.createElement('p')
      humdity.textContent = `Humidity: ${res.data.main.humdity}%`
      container.append(humdity)
      let windSpeed = document.createElement('p')
      windSpeed.textContent = `Wind Speed: ${res.data.wind.speed} MPH`
      container.append.(windSpeed)

      document
    })
  }

}



