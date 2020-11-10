const weather = document.querySelector(".js-weather");
const API_KEY ="323c858787389fd3290ac61d8b4c444c";
const COORDS = 'coords';

function getWeatherIcon(description){
    if (description == 'clear_sky'){
        const sunny = new Image();
        sunny.src=`./static/sunny.png`;
        sunny.classList.add("WeatherIcon");
        weather.append(sunny);
    } else{
        const clouds = new Image();
        clouds.src=`./static/clouds.png`;
        clouds.classList.add("WeatherIcon");
        weather.append(clouds);
    }
}


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const place =json.name;
        const temperature = json.main.temp;
        const description = json.weather[0].description;
        console.log(place, description, temperature);
        weather.textContent= `${temperature} ${description}  @${place}`;
        getWeatherIcon(description);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const coordsObj = {
        latitude,
        longitude
    };
    //객체에 value, key 값이 같다면 하나만 써도 가능하다 in JS

    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('cant access geo locaton');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();

    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
  
    }
}

function init(){
    loadCoords();

}

init();