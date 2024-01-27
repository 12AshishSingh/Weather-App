
const apiKey = "b0940c8a8a23d4e7206ac99b3340f53d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector('.search input');

const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
        var data = await response.json();
        //this data variable have all the info about weather from the city mumbail which is given in api url
        console.log(data);

        //taking city and displaying name
        document.querySelector('.city').innerHTML = data.name

        //tempreature
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";

        //humidity
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

        //wind
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/images/mist.png"
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchCity.value);
})
checkWeather();
