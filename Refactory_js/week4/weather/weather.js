const apiKey = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid"; // Replace with your actual API key

// Function to fetch weather data
function getWeather() {
  let city = document.getElementById("city").value || "Kampala";
  const errorMessage = document.getElementById("error-message");
  const weatherInfo = document.getElementById("weather-info");
  const forecastInfo = document.getElementById("forecast-info");

  errorMessage.textContent = '';
  weatherInfo.style.display = 'none';
  forecastInfo.style.display = 'none';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found or API error');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
      getForecast(data.coord.lat, data.coord.lon);
    })
    .catch(error => {
      errorMessage.textContent = 'Error: ' + error.message;
    });
}

// Function to fetch weather data using geolocation
function getWeatherByLocation() {
  const errorMessage = document.getElementById("error-message");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      function() {
        fetchWeatherByCoords(0.3476, 32.5825); // Default to Kampala if location denied
      }
    );
  } else {
    errorMessage.textContent = 'Geolocation not supported. Fetching Kampala weather instead.';
    fetchWeatherByCoords(0.3476, 32.5825);
  }
}

function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
      getForecast(lat, lon);
    })
    .catch(error => {
      document.getElementById("error-message").textContent = 'Error: ' + error.message;
    });
}

// Function to display current weather information
function displayWeather(data) {
  document.getElementById("location").textContent = `Weather in ${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
  
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon">`;
  
  document.getElementById("weather-info").style.display = 'block';
}

// Function to get 5-day forecast
function getForecast(lat, lon) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      displayForecast(data);
    })
    .catch(error => {
      console.error('Error fetching forecast:', error);
    });
}

// Function to display 5-day forecast
function displayForecast(data) {
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = '';

  data.list.forEach((forecast, index) => {
    if (index % 8 === 0) {
      const forecastItem = document.createElement("div");
      forecastItem.classList.add("weather-item");

      const date = new Date(forecast.dt * 1000);
      const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

      forecastItem.innerHTML = `
        <p>${dateString}</p>
        <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="weather icon">
        <p>Temp: ${forecast.main.temp}°C</p>
        <p>Humidity: ${forecast.main.humidity}%</p>
        <p>Wind: ${forecast.wind.speed} m/s</p>
      `;
      forecastContainer.appendChild(forecastItem);
    }
  });

  document.getElementById("forecast-info").style.display = 'block';
}
