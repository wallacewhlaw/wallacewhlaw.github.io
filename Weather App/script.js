const api = {
    key: "91b7d9b63b6b92c57221140847e96527",
    base: "https://api.openweathermap.org/data/2.5/"
}



const searchbox = document.querySelector('.searchbox');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}


function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dataBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let feellike = document.querySelector('.feellike');
    feellike.innerText = `Feels-like temp: ${Math.round(weather.main.feels_like)}°c`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let weather_des = document.querySelector('.current .weather-description');
    weather_des.innerText = `${weather.weather[0].description}`;
    
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `Humidity: ${weather.main.humidity}%`

    let windspeed = document.querySelector('.windspeed')
    windspeed.innerText = `Windspeed: ${weather.wind.speed}m/s`
}

function dataBuilder (d) {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ];
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let minute = d.getMinutes();
    let hour = d.getHours();
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${hour}: ${minute} ${day} ${date} ${month} ${year}`;
}

getResults('Hong Kong');
var time = new Date(1596146088*1000);
time.toLocaleTimeString('en-HK');