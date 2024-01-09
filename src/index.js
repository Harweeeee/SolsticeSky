const apiKey = "263tdf1c5f75o8ab465cedabbe0f4604";

let searchClick = document.querySelector("#searchButton");
searchClick.addEventListener("click", userSearch);

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(checkResponse);    
}

function checkResponse(response) {
    if (response.data.status === "not_found") {
        alert(response.data.message); 
    } else {
        displayWeather(response);
    }
    };

function userSearch(event) {
    event.preventDefault();
    let searchValue = document.querySelector("#searchInput").value;
    searchCity(searchValue);
      
}

function displayWeather(response) {
    let cityHeading = document.querySelector("h1");
    let citySearched = response.data.city;
    cityHeading.innerHTML = citySearched;
    let temperatureElement = document.querySelector("#temperature");
    let currentTemperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = `${currentTemperature}°C`;
    let description = document.querySelector("#tempDesc");
    let weatherDesc = response.data.condition.description;
    description.innerHTML = weatherDesc;
    let wind = document.querySelector("#wind-data");
    let windRead = response.data.wind.speed;
    wind.innerHTML = `${windRead} km/h`;
    console.log(response);
    let humid = document.querySelector("#humidity-data");
    let humidRead = response.data.temperature.humidity;
    humid.innerHTML = `${humidRead}%`;
};

searchCity("Sydney");
