function enciendeVerde() {
    let bombeta = document.getElementById("img1");
    bombeta.setAttribute("src", "Imatges/bombilla_green.png")
}

function apagaVerde() {
    let bombeta = document.getElementById("img1");
    bombeta.setAttribute("src", "Imatges/bombilla_off.png")
}

function enciendeRojo() {
    let bombeta = document.getElementById("img2");
    bombeta.setAttribute("src", "Imatges/bombilla_red.png")
}

function apagaRojo() {
    let bombeta = document.getElementById("img2");
    bombeta.setAttribute("src", "Imatges/bombilla_off.png")
}

function enciendeAmarillo() {
    let bombeta = document.getElementById("img3");
    bombeta.setAttribute("src", "Imatges/bombilla_on.png")
}

function apagaAmarillo() {
    let bombeta = document.getElementById("img3");
    bombeta.setAttribute("src", "Imatges/bombilla_off.png")
}

function luminosidadDae() {
    let indicador = document.getElementById("rango1");
    let bombeta = document.getElementById("img1");
    let posi = indicador.value;
    
    bombeta.style.opacity = posi/10;
   
}

function luminosidadDaee() {
    let indicador = document.getElementById("rango2");
    let bombeta = document.getElementById("img2");
    let posi = indicador.value;
    bombeta.style.opacity = posi/10;
}

function luminosidadDaeee() {
    let indicador = document.getElementById("rango3");
    let bombeta = document.getElementById("img3");
    let posi = indicador.value;
    bombeta.style.opacity = posi/10;
}