function formatDate() {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let hours = currentDate.getHours(0, 0, 0, 0);
  let minutes = currentDate.getMinutes();
  let year = currentDate.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentDate.getMonth()];

  let h2 = document.querySelector("#todays-date");

  let currentTimeDate = `Today ${hours}:${minutes} | ${day} ${date} ${month} ${year}`;
  h2.innerHTML = currentTimeDate;

  return currentTimeDate;
}
console.log(formatDate(new Date()));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatOneDay() {
  let currentDate = new Date();
  let boxOne = new Date(currentDate);
  boxOne.setDate(currentDate.getDate() + 1);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOne = days[boxOne.getDay()];
  let dateOne = boxOne.getDate();

  let boxDayOne = document.querySelector("#day-one");
  let dayOneDate = `${dayOne} ${dateOne}`;
  boxDayOne.innerHTML = dayOneDate;

  return dayOneDate;
}
console.log(formatOneDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatTwoDay() {
  let currentDate = new Date();
  let boxTwo = new Date(currentDate);
  boxTwo.setDate(currentDate.getDate() + 2);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayTwo = days[boxTwo.getDay()];
  let dateTwo = boxTwo.getDate();

  let boxDayTwo = document.querySelector("#day-two");
  let dayTwoDate = `${dayTwo} ${dateTwo}`;
  boxDayTwo.innerHTML = dayTwoDate;

  return dayTwoDate;
}
console.log(formatTwoDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatThreeDay() {
  let currentDate = new Date();
  let boxThree = new Date(currentDate);
  boxThree.setDate(currentDate.getDate() + 3);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayThree = days[boxThree.getDay()];
  let dateThree = boxThree.getDate();

  let boxDayThree = document.querySelector("#day-three");
  let dayThreeDate = `${dayThree} ${dateThree}`;
  boxDayThree.innerHTML = dayThreeDate;

  return dayThreeDate;
}
console.log(formatThreeDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatFourDay() {
  let currentDate = new Date();
  let boxFour = new Date(currentDate);
  boxFour.setDate(currentDate.getDate() + 4);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayFour = days[boxFour.getDay()];
  let dateFour = boxFour.getDate();

  let boxDayFour = document.querySelector("#day-four");
  let dayFourDate = `${dayFour} ${dateFour}`;
  boxDayFour.innerHTML = dayFourDate;

  return dayFourDate;
}
console.log(formatFourDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatFiveDay() {
  let currentDate = new Date();
  let boxFive = new Date(currentDate);
  boxFive.setDate(currentDate.getDate() + 5);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayFive = days[boxFive.getDay()];
  let dateFive = boxFive.getDate();

  let boxDayFive = document.querySelector("#day-five");
  let dayFiveDate = `${dayFive} ${dateFive}`;
  boxDayFive.innerHTML = dayFiveDate;

  return dayFiveDate;
}
console.log(formatFiveDay());

//f
// C to F Formula - (0°C × 9/5) + 32 = 32°F
/*
function convertToFah(event) {
  event.preventDefault();
  let highTemp = document.querySelector("#main-temperature");
  highTemp.innerHTML = 73.4;
  let lowTemp = document.querySelector("#low-temp");
  lowTemp.innerHTML = "53.6ºF";
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFah);

function convertToCelsius(event) {
  event.preventDefault();
  let lowTemp = document.querySelector("#low-temp");
  lowTemp.innerHTML = "12ºC";
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//

function showWeather(response) {
  console.log(response);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#desWea").innerHTML =
    response.data.weather[0].description;

  let temperature = Math.round(response.data.main.temp);
  let actualWeatherLocation = document.querySelector("#main-temperature");
  actualWeatherLocation.innerHTML = `${temperature}`;

  let inspectWind = response.data.wind.speed;
  let realWind = document.querySelector("#wind");
  realWind.innerHTML = `${inspectWind}`;

  let inspectHumidity = response.data.main.humidity;
  let realHumidity = document.querySelector("#precip");
  realHumidity.innerHTML = `Humidity = ${inspectHumidity}%`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

function myLocation(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myLocation);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
