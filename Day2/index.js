const xhr = new XMLHttpRequest();
const listProvince = document.getElementById("listProvince");
const listCity = document.getElementById("listCity");
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=21.02895857253441&lon=105.83048504135478&appid=65e6acbd89514013ffb82d788984105c");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Request success!");
            let listObject = JSON.parse(xhr.responseText);
            console.log(listObject);
            let htmlCity = "";
            let htmlProvince = "";
            for (let index = 0; index < listObject.length; index++) {
                const element = listObject[index];
                htmlCity += `<option value="${element.code}">${element.name}</option>`;
            }
            console.log(htmlCity);
            listCity.innerHTML = htmlCity;
            // listProvince.innerHTML = htmlProvince;
            listCity.onchange = function provinceList() {
                const cityCode = listCity.value;
                const districts = listObject[cityCode].name;
                for (let index = 0; index < listObject.length; index++) {
                    const element = listObject[index];
                    console.log(districts);
                    htmlProvince += `<option>${districts.name}</option>`;
                    listProvince.innerHTML = htmlProvince;
                }
            };
        } else {
            console.log("Request fails!");
        }
    }
};
xhr.send();