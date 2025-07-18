const apiKey = "fdf6e35abb534d70ada9dd17d97913fd"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      document.getElementById("weatherResult").innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>Temperature: ${temp} °C</p>
        <p>Condition: ${desc}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${wind} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}
