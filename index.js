async function getWeather() {
  const city = document.getElementById("cityInput").value.trim(); 

  if (city === "") {
      alert("Please enter a city name");
      return;
  }

  const apiKey = "e567677a3334c39ed360bc43f451ce5b";  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error("City not found");
      }

      const data = await response.json();

      document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("humidity").innerText = `${data.main.humidity}%`;
      document.getElementById("windSpeed").innerText = `${data.wind.speed} km/h`;

      const iconCode = data.weather[0].icon;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
      alert(error.message || "Error fetching weather data");
  }
}
