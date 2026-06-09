const lamp = document.getElementById("lamp");
const body = document.body;

let ligada = false;

lamp.addEventListener("click", () => {
    if (ligada) {
        lamp.src = "assets/lamp_off.png";
        body.style.background = "radial-gradient(circle, white 8%, black 100%)";
    } else {
        lamp.src = "assets/lamp_on.png";
        body.style.background = "radial-gradient(circle ,white 8%, yellow 100%)";
    }

    ligada = !ligada;
});