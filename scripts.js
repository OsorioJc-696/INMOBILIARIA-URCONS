// CARRUSEL

const carrusel = document.getElementById('carrusel');
const imagenes = carrusel.querySelectorAll('.imagen');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

let currentIndex = 0;

function mostrarImagen(index) {
    currentIndex = index - 1;
    actualizarCarrusel();
}

function cambiarImagen(delta) {
    currentIndex += delta;

    if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
    } else if (currentIndex >= imagenes.length) {
        currentIndex = 0;
    }

    actualizarCarrusel();
}

function actualizarCarrusel() {
    imagenes.forEach((imagen, index) => {
        const distancia = index - currentIndex;
        imagen.style.transform = `translateX(${distancia * 100}%)`;
    });
}

actualizarCarrusel();

