const xhrWeather = new XMLHttpRequest();
const xhrLocation = new XMLHttpRequest();
const place = document.getElementById('place');
const temp = document.getElementById('temperature');
const lat = document.querySelector('input[name="lat"]');
const lon = document.querySelector('input[name="lon"]');
const submitBtn = document.querySelector('button[name="submit"]');



submitBtn.addEventListener('click', function () {
    fetchWeather();

})

function fetchWeather() {

    fetchLocation();
    xhrWeather.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+lat.value+"&lon="+lon.value+"&appid=65e6acbd89514013ffb82d788984105c");
    
    xhrWeather.onreadystatechange = function () {
        if (xhrWeather.readyState === 4) {
            if (xhrWeather.status === 200) {
                console.log("Request weather API succesfully!!!");
                let listInfo = JSON.parse(xhrWeather.responseText);
                console.log(listInfo)
                let location = `${listInfo.name}`
                let celcius = `${(listInfo.main.feels_like - 273.15).toFixed(1)}`;
                place.innerHTML = `${location}`;
                temp.innerHTML = `${celcius}°C`;
            } else {
                console.log("Error");
            }
        }
    }
    
    xhrWeather.send();
}

function fetchLocation() {
    const city1 = 'Hanoi';
    const city2 = 'Ho_Chi_Minh';
    const city3 = 'Canada';
    xhrLocation.open("GET", "http://api.openweathermap.org/geo/1.0/direct?q="+city1+"&limit=1&appid=65e6acbd89514013ffb82d788984105c");
    
    xhrLocation.onreadystatechange = function () {
        if (xhrLocation.readyState === 4) {
            if (xhrLocation.status === 200) {
                console.log("Request location API succesfully!!!");
                let listInfo = JSON.parse(xhrLocation.responseText);
                for (let i in listInfo) {
                    let feature = listInfo[i]
                    // console.log(feature)
                }
                getLocation(listInfo);
            } else {
                console.log("Error");
            }
        }
    }
    
    xhrLocation.send();
}

function getLocation(list) {
    return list.map((location) => {
        location;
    })
}

fetchLocation()
getLocation();
// console.log(location)



