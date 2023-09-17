// find users geolocation
const API_KEY = "b80454c1ec503b93e4725557f021c67a";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metirc`
    fetch(url)//backend part
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child")
            const cityContainer = document.querySelector("#weather span:last-child")

            cityContainer.innerText=data.name;
           weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        })
    //js will call the url by itself, find the element which is represent the weather.
}
function onGeoError(){
    alert("Can't find you!")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 