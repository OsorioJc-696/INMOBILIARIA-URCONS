let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
        
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
        
    }
}




//MOSTRAR SUBPESTAÑAS 
function mostrarSubpestañas(numero, enlace) {
  var subpestaña = document.getElementById("subpestañas" + numero);
  
  if (subpestaña.style.display === "none" || subpestaña.style.display === "") {
      // Oculta todas las subpestañas antes de mostrar la seleccionada
      ocultarTodasSubpestañas();
      
      subpestaña.style.display = "block";
  } else {
      // Oculta la subpestaña si ya está visible
      subpestaña.style.display = "none";
  }

  // Desactivar las subpestañas al hacer clic en el enlace
  enlace.onclick = function(event) {
      event.preventDefault();
  };
}

function ocultarTodasSubpestañas() {
  // Oculta todas las subpestañas
  for (var i = 1; i <= 4; i++) {
      var subpestaña = document.getElementById("subpestañas" + i);
      subpestaña.style.display = "none";
  }
}

// Llama a la función para ocultar todas las subpestañas al cargar la página
ocultarTodasSubpestañas();

// Al cargar la página, obtén la última subpestaña visible desde la cookie
window.onload = function() {
    var ultimaSubpestaña = obtenerCookie("ultimaSubpestañaVisible");
    if (ultimaSubpestaña) {
        mostrarSubpestañas(ultimaSubpestaña);
    }
};



//CREACION DE PARTICULAS
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 150, // Aumentamos la cantidad de partículas
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#ff0000", "#00ff00", "#5B000E", "#ffff00", "#ff00ff", "#00ffff","#ffffff"], // Define un array de colores
        "random": true, // Hacemos que los colores sean aleatorios dentro del array
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.7, // Aumentamos la opacidad de las partículas
        "random": true, // Hacemos que la opacidad sea aleatoria
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5, // Reducimos el tamaño de las partículas
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#9EBF13",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4, // Aumentamos la velocidad de movimiento
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200, // Aumentamos la distancia para agarrar partículas
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100, // Aumentamos la distancia de repulsión
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

//MOSTRAR SECCIONES
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let autoScroll = true;
  let scrollDelay = 5000; // 4 segundos
  let stopScrollTimeout = null;

  function scrollToNextSection() {
      if (autoScroll) {
          let currentSection = document.querySelector(".active");
          let nextSection = currentSection.nextElementSibling;

          if (!nextSection) {
              nextSection = sections[0];
          }

          currentSection.classList.remove("active");
          nextSection.classList.add("active");

          let scrollTo = nextSection.offsetTop - 80; // 80px de compensación hacia abajo
          window.scrollTo({
              top: scrollTo,
              behavior: "smooth"
          });

          stopScrollTimeout = setTimeout(function () {
              scrollToNextSection();
          }, scrollDelay);
      }
  }

  function pauseScrollOnMouseOver() {
      autoScroll = false;
      if (stopScrollTimeout) {
          clearTimeout(stopScrollTimeout);
      }
  }

  function resumeScrollOnMouseOut() {
      autoScroll = true;
      stopScrollTimeout = setTimeout(function () {
          scrollToNextSection();
      }, 8000); // 6 segundos
  }

  sections[0].classList.add("active");
  scrollToNextSection();

  sections.forEach((section) => {
      section.addEventListener("mouseover", pauseScrollOnMouseOver);
      section.addEventListener("mouseout", resumeScrollOnMouseOut);
  });
});




//FORMULARIO DE CONTACTO
function enviarSMS() {
  // Tu lógica para enviar el SMS

  // Muestra la ventana emergente de agradecimiento
  document.getElementById('popup').style.display = 'block';
}

function cerrarPopup() {
  // Cierra la ventana emergente de agradecimiento
  document.getElementById('popup').style.display = 'none';
}

// CARRUSEL
let slideIndex = 1;
        mostrarSlide(slideIndex);

        function cambiarSlide(n) {
            mostrarSlide(slideIndex += n);
        }

        function mostrarSlide(n) {
            const slides = document.querySelectorAll('.carrusel-item');
            
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            
            // Calcula la transformación necesaria para mostrar la diapositiva actual
            const translateXValue = -(slideIndex - 1) * 300; // 300 es el ancho de cada diapositiva
            document.querySelector('.carrusel-slide').style.transform = `translateX(${translateXValue}px)`;
        }
