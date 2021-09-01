const apikey = "183dfa5c5acd42ec63bdbe0704656a58";
const main =document.getElementById("main");
const form=document.getElementById("form");
const search = document.getElementById("search");
const url=(city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getweather(city) {
    const resp = await fetch(url(city), {origin :"cors"});
    const respdata = await resp.json();
    console.log(respdata);

    addweathertopage(respdata);
}
function addweathertopage(data){
    const temp = ktoc(data.main.temp);
    const weather = document.createElement("div");
    weather.classList.add("weather");
    weather.innerHTML =  `<h1><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small>`;

    main.innerHTML="";
    main.appendChild(weather);
}
function ktoc(K){
    return Math.floor(K -273.15);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;


    if(city){
        getweather(city);
    }
}); 
