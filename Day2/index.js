const xhr = new XMLHttpRequest();
const listProvince = document.getElementById("listProvince");
const listCity = document.getElementById("listCity");
const provinceList = document.getElementById("pList");
const districtsList = document.querySelectorAll(".city");
xhr.open("GET", "https://provinces.open-api.vn/api/?depth=3");

xhr.onreadystatechange = function getList() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Request success!");
            let listObject = JSON.parse(xhr.responseText);
            console.log(listObject);
            let htmlCity = "";
            let htmlProvince = "";
            for (let index = 0; index < listObject.length; index++) {
                const element = listObject[index];
                htmlCity += `<a href="javascript:;" onclick="getD()" class="city">${(element.name)}</a>`;
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

function getD() {
    getList();
}


