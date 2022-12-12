const xhr = new XMLHttpRequest();
const listProvince = document.getElementById("listProvince");
const listCity = document.getElementById("listCity");
const provinceList = document.getElementById("pList");
// xhr.open("GET", "https://provinces.open-api.vn/api/?depth=3");
fetch('https://provinces.open-api.vn/api/?depth=3')
  .then((response) => response.json())
  .then((data) => console.log( "2131232131",data));

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Request success!");
            let listObject = JSON.parse(xhr.responseText);
            console.log(listObject);
            let htmlCity = "";
            let htmlProvince = "";
            for (let index = 0; index < listObject.length; index++) {
                const data = listObject[index];
                htmlCity += `<tr><td>${(data.codename)}</td><td>${(element.code)}</td></tr>`;

            }
            console.log(htmlCity);
            provinceList.innerHTML = htmlCity
            // listProvince.innerHTML = htmlProvince;
        } else {
            console.log("Request fails!");
        }
    }
};
xhr.send();