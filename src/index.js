const apiKey = "263tdf1c5f75o8ab465cedabbe0f4604";

let searchClick = document.querySelector("#searchButton");
searchClick.addEventListener("click", displayCity);

function displayCity(event) {
    event.preventDefault();
    let cityHeading = document.querySelector("h1");
    let searchValue = document.querySelector("#searchInput").value;
    cityHeading.innerHTML = searchValue;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchValue}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);    
}

function displayTemperature(response) {
    let temperature = document.querySelector("#temperature");
    let currentTemperature = Math.round(response.data.temperature.current);
    temperature.innerHTML = `${currentTemperature}°C`;
    console.log(response);
}

