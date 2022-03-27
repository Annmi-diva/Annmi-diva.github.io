const weatherApiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=64a077ede0594723caa3d5ad20669634'
const forecastApiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=64a077ede0594723caa3d5ad20669634'

// ***current weather summary***//
fetch(weatherApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById("Currently").innerText = jsObject.main.temp;
      document.getElementById("Conditon").textContent = jsObject.weather[0].description;
      document.getElementById("High").textContent = jsObject.main.temp_max;
      document.getElementById("Humidity").textContent = jsObject.main.humidity;
      document.getElementById("Wind-Speed").innerText = jsObject.wind.speed;

      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
      const desc = jsObject.weather[0].description;
      document.getElementById('imagesrc').textContent = imagesrc;
      document.getElementById('icon').setAttribute('src', imagesrc);
      document.getElementById('icon').setAttribute('alt', desc);
  });

fetch(forecastApiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const weatherForecast = jsObject['list'].filter((fore) => {
        if (fore.dt_txt.includes('18:00:00')) {
            return fore;
        }
    })
        for (let i = 0; i < weatherForecast.length; i++) {
            let fiveday = document.getElementsByClassName("forecast-col")
            let day = document.getElementsByClassName("head")
            day.textContent = daynames[new Date(weatherForecast[i].dt_txt).getDay()]
            fiveday.appendChild(day)
            document.querySelector("div.forecast").appendChild(fiveday)
            let img = document.getElementsByClassName("weather-image")
            img.setAttribute("src", 'https://openweathermap.org/img/w/' + weatherForecast[i].weather[0].icon + '.png')
            img.setAttribute("alt", weatherForecast[i].weather[0].description)
            img.setAttribute("id", "fore")
            fiveday.appendChild(img)
            let temp = document.getElementsByClassName("data")
            temp.textContent = "High: " + weatherForecast[i].main.temp_max + "°F" + "  " + "Low: " + weatherForecast[i].main.temp_min + "°F"
            fiveday.appendChild(temp)
        }

})