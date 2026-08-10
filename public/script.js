const jugador = document.getElementById("jugador");
const estrella = document.getElementById("estrella");
const puntosTexto = document.getElementById("puntos");
const tiempoTexto = document.getElementById("tiempo");

let x = 280;
let y = 180;
let puntos = 0;
let tiempo = 30;
let juegoActivo = false;
let intervalo;

document.addEventListener("keydown", function(evento) {

    if (!juegoActivo) return;

    if (
        evento.key === "ArrowUp" ||
        evento.key === "ArrowDown" ||
        evento.key === "ArrowLeft" ||
        evento.key === "ArrowRight"
    ) {
        evento.preventDefault();
    }

    const velocidad = 15;

    if (evento.key === "ArrowUp") {
        y -= velocidad;
    }

    if (evento.key === "ArrowDown") {
        y += velocidad;
    }

    if (evento.key === "ArrowLeft") {
        x -= velocidad;
    }

    if (evento.key === "ArrowRight") {
        x += velocidad;
    }

    x = Math.max(0, Math.min(560, x));
    y = Math.max(0, Math.min(360, y));

    jugador.style.left = x + "px";
    jugador.style.top = y + "px";

    comprobarColision();
});

function moverEstrella() {

    const nuevaX = Math.floor(Math.random() * 560);
    const nuevaY = Math.floor(Math.random() * 360);

    estrella.style.left = nuevaX + "px";
    estrella.style.top = nuevaY + "px";
}

function comprobarColision() {

    const estrellaX = parseInt(estrella.style.left);
    const estrellaY = parseInt(estrella.style.top);

    const distancia = Math.sqrt(
        Math.pow(x - estrellaX, 2) +
        Math.pow(y - estrellaY, 2)
    );

    if (distancia < 45) {

        puntos++;

        puntosTexto.textContent = puntos;

        moverEstrella();
    }
}

function iniciarJuego() {

    puntos = 0;
    tiempo = 30;

    puntosTexto.textContent = puntos;
    tiempoTexto.textContent = tiempo;

    x = 280;
    y = 180;

    jugador.style.left = x + "px";
    jugador.style.top = y + "px";

    moverEstrella();

    juegoActivo = true;

    clearInterval(intervalo);

    intervalo = setInterval(function() {

        tiempo--;

        tiempoTexto.textContent = tiempo;

        if (tiempo <= 0) {

            clearInterval(intervalo);

            juegoActivo = false;

            alert(
                "Juego terminado. Conseguite " +
                puntos +
                " puntos."
            );
        }

    }, 1000);
}
