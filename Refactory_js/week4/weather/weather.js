
    const apiKey = 'YOUR_API_KEY_HERE'; // 

    // Function to fetch weather data
    function getWeather() {
      const city = document.getElementById("city").value;
      const errorMessage = document.getElementById("error-message");
      const weatherInfo = document.getElementById("weather-info");
      const forecastInfo = document.getElementById("forecast-info");

      // Clear previous error message and weather info
      errorMessage.textContent = '';
      weatherInfo.style.display = 'none';
      forecastInfo.style.display = 'none';

      if (!city) {
        errorMessage.textContent = 'Please enter a city name.';
        return;
      }

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
          getForecast(data.coord.lat, data.coord.lon); // Get forecast based on coordinates
        })
        .catch(error => {
          errorMessage.textContent = 'Error: ' + error.message;
        });
    }

    // Function to fetch weather data using geolocation
    function getWeatherByLocation() {
      const errorMessage = document.getElementById("error-message");

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('API error');
              }
              return response.json();
            })
            .then(data => {
              displayWeather(data);
              getForecast(lat, lon); // Get forecast based on coordinates
            })
            .catch(error => {
              errorMessage.textContent = 'Error: ' + error.message;
            });
        });
      } else {
        errorMessage.textContent = 'Geolocation is not supported by this browser.';
      }
    }

    // Function to display current weather information
    function displayWeather(data) {
      const location = document.getElementById("location");
      const temperature = document.getElementById("temperature");
      const humidity = document.getElementById("humidity");
      const windSpeed = document.getElementById("wind-speed");
      const weatherIcon = document.getElementById("weather-icon");

      location.textContent = `Weather in ${data.name}, ${data.sys.country}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

      // Show weather icon
      const iconCode = data.weather[0].icon;
      weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon">`;

      // Show weather information
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
      forecastContainer.innerHTML = ''; // Clear previous forecast

      data.list.forEach((forecast, index) => {
        if (index % 8 === 0) { // Pick every 8th entry (representing the next day's forecast)
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
