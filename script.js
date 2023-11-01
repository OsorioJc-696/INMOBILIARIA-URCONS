let menuVisible = false;
let pestañas = document.querySelectorAll('.pestaña');

function mostrarOcultarMenu() {
  if (menuVisible) {
    // Oculta todas las subpestañas al ocultar el menú
    ocultarTodasSubpestañas();
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;

  }
}

// CHAT BOT
document.addEventListener("DOMContentLoaded", function () {
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbot = document.getElementById("chatbot");
  const closeChatbot = document.getElementById("close-chatbot");
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  chatbotIcon.addEventListener("click", function () {
      chatbot.style.display = "block";
      chatbotIcon.style.display = "none";
      // Muestra un mensaje de bienvenida
      displayBotResponse("¡Hola! Soy el chatbot de la inmobiliaria. ¿En qué puedo ayudarte?");
      // Muestra las opciones para realizar consultas
      displayBotResponse("Elige una opción:");
      displayBotResponse("1. ¿Cuál es el horario de oficina");
      displayBotResponse("2. Quiero contactar con un Agente Adeministrativo");
      displayBotResponse("3. Quiero comprar una propiedad");
  });

  closeChatbot.addEventListener("click", function () {
      chatbot.style.display = "none";
      chatbotIcon.style.display = "block";
  });


  function sendMessage(message) {
      const userMessage = document.createElement("div");
      userMessage.className = "user-message";

  // Icono del usuario
  const userIcon = document.createElement("div");
  userIcon.className = "user-icon";
  userIcon.innerHTML = '<img src="user-icon.png" alt="User Icon">';
  

  // Contenido del mensaje
  const messageContent = document.createElement("div");
  messageContent.textContent = message;


  userMessage.appendChild(userIcon);
  userMessage.appendChild(messageContent);

  chatMessages.appendChild(userMessage);

      const botResponse = getBotResponse(message);
      displayBotResponse(botResponse);
  }

  function getBotResponse(userMessage) {
    if (userMessage.includes("1")) {
      return "Nuestro horario es: \n"
      +"\nlun:	Abierto las 24 horas"
      +"\nmar a vie:	9:00 a. m. - 1:00 .p.m & 3:00 - 7:00 p. m."
      +"\nsáb:	9:00 a. m. – 1:00 p. m."
      +"\ndom:	Cerrado";
  } else if (userMessage.includes("2")) {
      return "Puedes contactarnos por:"
      +"\n Teléfono: 947 278 720"
      +"\n Correo electrónico: Ventas@inversionesurcons.com ";
  } else if (userMessage.includes("3")) {
      return "Aquí tienes algunas preguntas frecuentes:\n1. ¿Cuáles son los requisitos para alquilar una propiedad?\n2. ¿Cuál es el proceso de compra de una propiedad?\n3. ¿Cuáles son las zonas disponibles?";
  } else {
      return "Por favor, selecciona una de las opciones (1, 2 o 3) para realizar una consulta.";
  }
}

function displayBotResponse(response) {
  const botMessage = document.createElement("div");
  botMessage.className = "chatBot-message";
  
  // Icono del chatbot
  const chatbotIcon = document.createElement("div");
  chatbotIcon.className = "chatBot-icon";
  chatbotIcon.innerHTML = '<img src="chatbot-icon.png" alt="Chatbot Icon">';
  
  // Contenido del mensaje
  const messageContent = document.createElement("div");
  messageContent.textContent = response;

  botMessage.appendChild(chatbotIcon);
  botMessage.appendChild(messageContent);

  chatMessages.appendChild(botMessage);
}

sendButton.addEventListener("click", function () {
    const message = userInput.value;
    if (message.trim() !== "") {
        sendMessage(message);
        userInput.value = "";
    }
  });
 

  userInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          sendButton.click();
      }
  });

  function scrollToBottom() {
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});


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

// RESPONSIVE


// CARRUSEL

