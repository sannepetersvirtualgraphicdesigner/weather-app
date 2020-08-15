//////////////Display the current date and time
function formatDate(date) {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//debugger;
function showTemperature(response) {
  //console.log(response);
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = `${temperature}°C`;

  let description = document.querySelector("#todays-description");
  description.innerHTML = response.data.weather[0].description;

  let feel = document.querySelector("#feels-like");
  let feelsLike = Math.round(response.data.main.feels_like);
  feel.innerHTML = `${feelsLike}`;

  let hum = document.querySelector("#hum");
  let humidity = response.data.main.humidity;
  hum.innerHTML = `${humidity}`;

  let wind = document.querySelector("#wind");
  let windSpeed = response.data.wind.speed;
  wind.innerHTML = `${windSpeed}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("#city-name");
  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
    searchCity(searchInput.value);
  } else {
    city.innerHTML = `Sydney NSW, Australia`;
  }
}
function searchCity(city) {
  let apiKey = "b82cab690fb5582f3fbd2a7b59894357";
  let units = "metric";
  let apiBeginpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let apiUrl = `${apiBeginpoint}?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// Geolocation currentLocation
function retrievePosition(position) {
  let apiKey = "b82cab690fb5582f3fbd2a7b59894357";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiBeginpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiBeginpoint}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}
function getPosition() {
  //alert("test");
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentlocationButton = document.querySelector("#searchcurrentcity-button");
currentlocationButton.addEventListener("click", getPosition);
