function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input")
    let newCity =document.querySelector("#current-city")
    console.log(searchInput.value)
    if (searchInput.value) {
        console.log(searchInput)
        newCity.innerHTML = `${searchInput.value}`;
    } else {
        alert("Please choose a city")
    }
    let apiKey = "6d00dd909f5a745d5e78705c992cb859";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityTemp);
    console.log()
}
let form = document.querySelector("#search-bar")
form.addEventListener("submit", searchCity)
function showCityTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    document.querySelector("#current-city").innerHTML = response.data.name;
    let h2Temp = document.querySelector("#current-temp");
    h2Temp.innerHTML = `${temperature}°`
}
///
function searchLocation(position) {
    let apiKey = "  6d00dd909f5a745d5e78705c992cb859";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showCityTemp);
  }
  
  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  let currentLocationButton = document.querySelector("#current-location");
  currentLocationButton.addEventListener("click", currentLocation);


///
let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
let day = days[now.getDay()];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
let month = months[now.getMonth()] 

let dateOnly = document.querySelector("#date-only")
let timeOnly = document.querySelector("#time-only")
dateOnly.innerHTML = `${day}, ${month} ${date}, ${year}`
timeOnly.innerHTML= `${hour}:${minute}`
///
function changeCel(event) {
    event.preventDefault();
    let newTempCel = document.querySelector("#current-temp")
    newTempCel.innerHTML= "11°"
}
function changeFahr(event) {
    event.preventDefault();
    let newTempFahr = document.querySelector("#current-temp")
    newTempFahr.innerHTML= "52°"
}

let tempConverterCel = document.querySelector("#Cel-button")
tempConverterCel.addEventListener("click", changeCel)
let tempConverterFahr = document.querySelector("#fahr-button")
tempConverterFahr.addEventListener("click", changeFahr)
///
