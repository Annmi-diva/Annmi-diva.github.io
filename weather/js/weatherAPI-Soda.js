const weatherApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=30762b7d0c21afae183f3c5a548a12cb"
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=30762b7d0c21afae183f3c5a548a12cb"

// ***current weather summary***//
fetch(weatherApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById("Currently").innerText = jsObject.main.temp;
      document.getElementById("Condition").textContent = jsObject.weather[0].description;
      document.getElementById("High").textContent = jsObject.main.temp_max;
      document.getElementById("Humidity").textContent = jsObject.main.humidity;
      document.getElementById("Wind-Speed").innerText = jsObject.wind.speed;
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
            let fiveday = document.createElement('div')
            fiveday.setAttribute("class", "forecast-col")

            let day = document.createElement("span")
            day.textContent = daynames[new Date(weatherForecast[i].dt_txt).getDay()]
            day.setAttribute("class", "head")
            fiveday.appendChild(day)
            document.querySelector("div.forecast").appendChild(fiveday)

            let desc = weatherForecast[i].weather[0].description;

            let img = document.createElement("img")

            if (desc.includes("clear sky")) {
                img.setAttribute("src", "img/sunny.svg")
                img.setAttribute("alt", weatherForecast[i].weather[0].description)
            }
            else if (desc.includes("few clouds")) {
                img.setAttribute("src", "img/sun-cloud.svg")
                img.setAttribute("alt", weatherForecast[i].weather[0].description)
            }
            else if (desc.includes("clouds")) {
                img.setAttribute("src", "img/cloudy.svg")
                img.setAttribute("alt", weatherForecast[i].weather[0].description)
            }
            else if (desc.includes("rain")) {
                img.setAttribute("src", "img/rainy.svg")
                img.setAttribute("alt", weatherForecast[i].weather[0].description)
            }
            else if (desc.includes("thunderstorm")) {
                img.setAttribute("src", "img/thunderstorm.svg")
                img.setAttribute("alt", weatherForecast[i].weather[0].description)
            }
            else if (desc.includes("snow")) {
                img.setAttribute("src", "img/snow.svg")
                img.setAttribute("alt", weatherForecast[i].weather[0].description)
            }

            img.setAttribute("class", "weather-image")
        
            fiveday.appendChild(img)
        
            let temp = document.createElement("span")
            temp.textContent = "High: " + weatherForecast[i].main.temp_max.toFixed(1) + "°F" + "  " + "Low: " + weatherForecast[i].main.temp_min.toFixed(1) + "°F"
            temp.setAttribute("class", "data")
            fiveday.appendChild(temp)
        }
    

})