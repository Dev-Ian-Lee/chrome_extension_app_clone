const APIKey = "f600aee042613d2a2f650ba3a25ccdac";

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("Your coordinate is ", latitude, longitude);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Cannot find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
