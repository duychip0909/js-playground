const btnOpen = document.getElementById("button");
const canvas = document.getElementById("wrapper");

document.addEventListener('DOMContentLoaded', function(e) {
    document.getElementById("exit").addEventListener("click", openCanvas);
    document.querySelector("body").onclick = closeCanvas;
})

function openCanvas() {
    document.getElementById("wrapper").classList.add('open');
    document.querySelector("body").style.marginLeft = "250px";
    document.querySelector("body").classList.add("darker");
}

function closeCanvas() {
    canvas.classList.remove("open");
    document.querySelector("body").classList.remove("darker");
    document.querySelector("body").style.marginLeft = "0px";
}