citySearch = lastCity
if (citySearch == '') {
  console.log('nothing here')
} else {
  searchWeather()
}
document.getElementById('searchEnter').addEventListener('click', event => {
  event.preventDefault()
  citySearch = document.getElementById('citySearch').value
  searchWeather()
  document.getElementById('citySearch').value = ''
  localStorage.setItem('lastCity', citySearch)
  history.push(citySearch)
  localStorage.setItem('history', JSON.stringify(history))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('futureWeather')) {
    citySearch = event.target.parentNode.id
    fiveDayForecast()
  }
})
