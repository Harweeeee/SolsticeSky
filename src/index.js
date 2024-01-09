function displayCity(event) {
    event.preventDefault();
    let cityHeading = document.querySelector("h1");
    let searchValue = document.querySelector("#searchInput").value;
    cityHeading.innerHTML = searchValue;
}

let searchClick = document.querySelector("#searchButton");
searchClick.addEventListener("click", displayCity);

const apiKey = "263tdf1c5f75o8ab465cedabbe0f4604";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${searchValue}&key=${apiKey}&units=metric";
