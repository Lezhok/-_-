const apiKey = 'ea07a1e92f8619b4d4579df6ef6463fc'; // Created by Oleh Volosatskyi

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (city === '') {
    alert('Будь ласка, введіть назву міста.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  // Використовуємо AJAX для отримання даних з API
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      displayWeather(response);
    } else {
      alert('Не вдалося знайти місто. Спробуйте ще раз.');
    }
  };
  xhr.send();
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>Погода в місті ${data.name}</h2>
    <p>Температура: ${data.main.temp}°C</p>
    <p>Вологість: ${data.main.humidity}%</p>
    <p>Швидкість вітру: ${data.wind.speed} м/с</p>
  `;
}
