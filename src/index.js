function displayCity(event) {
    event.preventDefault();
    let city = document.querySelector("h1");
    let searchValue = document.querySelector("#searchInput").value;
    city.innerHTML = searchValue;
}

let searchClick = document.querySelector("#searchButton");
searchClick.addEventListener("click", displayCity);