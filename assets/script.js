const localStorage = window.localStorage
const savedTrip = (localStorage.getItem('savedTrip')) || ''


document.getElementById('calculateRoute').addEventListener('click', event => {
  event.preventDefault()

  const startLocation = document.getElementById('startLocation').value
  const endLocation = document.getElementById('endLocation').value

  axios.get(`https://openweathermap.org/api)`)
    .then(res => {
      const trip = res.data

      document.getElementById('startLocation').innerHTML = ''
      document.getElementById('endLocation').innerHTML = ''

    
      document.getElementById('routeTime').textContent = `${trip.route.formattedTime}`
    })
})


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
