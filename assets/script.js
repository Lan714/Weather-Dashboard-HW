const localStorage = window.localStorage
const lastCity = (localStorage.getItem('lastCity')) || ""
let citySearch = ''



const searchWeather = () => {
  console.log(citySearch)

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=6526862a1809d80a03753664a86c2445&units=imperial`)
    .then(res => {
      const city = res.data
      console.log(city)
      const weatherElem = document.createElement('div')
      weatherElem.classList = 'card'
      weatherElem.style = "width: 100%; border: 1px solid blue;"
      weatherElem.innerHTML = `
      <div id="${city.name}" class="card-body">
            <img src="http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="${city.weather[0].main}">
            <h4 class="card-title">${city.name}</h4>
            <h5 class="card-subtitle mb-2">${city.weather[0].main}</h5>
            <h6 class="card-text">Temperature: ${city.main.temp}°</h6>
            <h6 class="card-text">Feels Like: ${city.main.feels_like}°</h6>
            <h6 class="card-text">Humidity: ${city.main.humidity}</h6>
            <h6 class="card-text">High: ${city.main.temp_max}°</h6>
            <h6 class="card-text">Low: ${city.main.temp_min}°</h6>
            <h6 class="card-text">Wind Speed: ${city.wind.speed}</h6>
            <button type="submit" id="getFutureWeather" class="btn btn-primary futureWeather">Week Forecast</button>
          </div>
      `
      document.getElementById('resultsHere').append(weatherElem)
    })
    .catch(err => console.error(err))
} 

const fiveDayForecast = ()=> {
  console.log(citySearch)
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=6526862a1809d80a03753664a86c2445&units=imperial`)
  .then(res => {
    const city = res.data 
    console.log(city)
    for(let i = 1; i < 41; i = i + 8) {
      const forecastElem = document.createElement('div')
      forecastElem.innerHTML = `
       <div class="card" style="width:100%; border: 1px solid blue;">
            <div class="card-body">
              <img src="https://openweathermap.org/img/wn/${city.list[i].weather[0].icon}@2x.png">
              <h4 class="card-title">${city.list[i].dt_txt}</h4>
            <h5 class="card-subtitle mb-2">${city.list[i].weather[0].main}</h5>
            <h6 class="card-text">Temperature: ${city.list[i].main.temp}°</h6>
            <h6 class="card-text">Feels Like: ${city.list[i].main.feels_like}°</h6>
            <h6 class="card-text">Humidity: ${city.list[i].main.humidity}</h6>
            <h6 class="card-text">High: ${city.list[i].main.temp_max}°</h6>
            <h6 class="card-text">Low: ${city.list[i].main.temp_min}°</h6>
            <h6 class="card-text">Wind Speed: ${city.list[i].wind.speed}</h6>
            </div>
          </div
      `
      document.getElementById('resultsHere').append(forecastElem)
    }
  })
}


let history = JSON.parse(localStorage.getItem('history')) || []
