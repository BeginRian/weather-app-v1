const card = document.querySelector('.card')
const search = document.querySelector('.search')
const input = document.querySelector(".input")
const weather = document.querySelector('.weather')
const desc = document.querySelector('.desc')
const weatherimage = document.querySelector('.weather_icon');
const temperature = document.querySelector('.temperature')

async function checkWeather(city){
    const APIKey = /*'API KEY'*/;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    const data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${data.weather[0].description}`;

    if(data.weather[0].main == "Clouds"){
        weatherimage.src = "image/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherimage.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherimage.src = "image/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherimage.src = "image/snow.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherimage.src = "image/mist.png";
    }

    document.querySelector(".weather").style.display = "block"

}
search.addEventListener('click', ()=>{
    checkWeather(input .value);
});
