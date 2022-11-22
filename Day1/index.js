const btnOpen = document.getElementById("exit");
const canvas = document.getElementById("wrapper");

if (btnOpen !== null) {
    btnOpen.onclick = openCanvas;
}

function openCanvas() {
    document.getElementById("wrapper").classList.toggle('open');
    document.querySelector("body").classList.toggle("active");
}