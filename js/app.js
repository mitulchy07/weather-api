const apiKey = `e5bd9f793879558c7895cc04bf43abd1`

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

function displayTemp(data) {
    const tempetature = document.getElementById("temp");
    tempetature.innerText = `${data.main.temp ? data.main.temp : "No Data"}`;
    document.getElementById('status').innerText = `${data.weather[0].main ? data.weather[0].main : "No Data"}`;


}

document.getElementById('search-button').addEventListener('click', function() {
    const searchField = document.getElementById('city-input');
    const city = searchField.value;
    document.getElementById('city-name').innerText = city;
    loadTemperature(city);
})