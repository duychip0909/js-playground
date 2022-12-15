const place = document.getElementById('place');
const temp = document.getElementById('temperature');
const lat = document.querySelector('input[name="lat"]');
const lon = document.querySelector('input[name="lon"]');
const submitBtn = document.querySelector('button[name="submit"]');
let cities = {
    kr: "Seoul",
    jp: "Tokyo",
    hn: "Hanoi",
    fr: "France",
    en: "London"
};

let cityHtml = {};

function updateSwiperHtml () {
    // document.querySelector('#place').innerHTML = Object.values(cityHtml).join("");

    if (window.__slider) {
        window.__slider.removeAllSlides();
        window.__slider.appendSlide(
            Object.values(cityHtml).join("")
        );
    }
}


function fetchWeather(cityCode, lat, lon, name) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=492affbc537e0f6baa81e611ad2c03bf");
    
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Request weather API succesfully!!!");
                let listInfo = JSON.parse(xhr.responseText);
                console.log(listInfo)
                let celcius = `${(listInfo.main.feels_like - 273.15).toFixed(1)}`;
                cityHtml[cityCode] = `
                    <div class="swiper-slide">
                        <div class="screen">
                            <div class="inner">
                                <span>${name}</span>
                                <span>${celcius}°C</span>
                            </div>
                        </div>
                    </div>
                `;

                updateSwiperHtml();
            } else {
                console.log("Error");
            }
        }

        
    }
    xhr.send();
};

function weatherIn() {
    const xhrLocation = []; 
    
    for (let i in cities) {
        xhrLocation[i] = new XMLHttpRequest();
        xhrLocation[i].open("GET", "http://api.openweathermap.org/geo/1.0/direct?q="+cities[i]+"&limit=1&appid=492affbc537e0f6baa81e611ad2c03bf");
        
        xhrLocation[i].onreadystatechange = function () {
            if (xhrLocation[i].readyState === 4) {
                if (xhrLocation[i].status === 200) {
                    console.log("Request location API succesfully!!!");
                    let listInfo = JSON.parse(xhrLocation[i].responseText);
                    fetchWeather(i, listInfo[0].lat, listInfo[0].lon, listInfo[0].local_names.vi);
                    console.log(listInfo[0].local_names.vi)
                } else {
                    console.log("Error");
                }
            }
        }
        
        xhrLocation[i].send();
    }
}

const list = document.getElementById('test');

async function getLocation() {
    const response = []
    for (let i in cities) {
        const res = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cities[i]+"&limit=1&appid=492affbc537e0f6baa81e611ad2c03bf")
        response.push(await res);
            res.json().then(data => {
                    const info = data[0];
                    // list.innerHTML += `<li>${info}</li>`
                    console.log(info.lat + ' <- this is lat')
                    console.log(info.lon + ' <- this is lon')
            })
            .catch(err => {
                console.log('Error :-S', err)
            });
    }
}

getLocation()

// weatherIn()





