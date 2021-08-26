let cities = [];

let cityFormEl = document.querySelector(`#city-search-form`)
let cityInput = document.querySelector(`#city`);
let weatherContainerEl = document.querySelector(`current-weather-container`)
let citySearchInputEl = document.querySelector(`#searched-city`)
let forecastTitle = document.querySelector(`#forecast`)
let forecastContainerEl = document.querySelector(`#fiveday-container`)
let pastSearchButtonEl = document.querySelector(`#past-search-buttons`)

let formSubmitHandler = () => {
  event.preventDefault()
  let city = cityInputEl.value.trim()
  if(city){
    getCityWeather(city);
    get5Day(city);
    cities.unshift({city});
    cityInputEl.value = ''
  } else {
    alert(`Please enter a city`)
  }
  saveSearch()
  pastSearch()
}

let saveSearch = () =>{
  localStorage.setItems(`cities`, JSON.stringify(cities))
}

var get 

weather.main.humidity = humidity
weather.main.temp = temperature
weather.wind.speed = milesperhour


const API = 6526862a1809d80a03753664a86c2445
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5 - day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
//   ```
