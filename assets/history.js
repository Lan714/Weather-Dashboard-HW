const previousSearches = JSON.parse(localStorage.getItem('history')) || []
let i = 0
previousSearches.forEach(() => {
  citySearch = previousSearches[i]
  searchWeather()
  i++
})

document.getElementById('clearHistory').addEventListener('click', event => {
  event.preventDefault()
  localStorage.removeItem('history')
  document.getElementById('resultsHere').innerHTML = ``
})
document.addEventListener('click', event => {
  if (event.target.classList.contains('futureWeather')) {
    locationSearch = event.target.parentNode.id
    fiveDayForecast()
  }
})
