document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        // Reemplaza con tus credenciales de Twilio
        const accountSID = 'tu_account_sid';
        const authToken = 'tu_auth_token';
        const twilioNumber = 'tu_numero_de_twilio'; // Debe estar en formato '+1234567890'

        fetch('/enviar-mensaje', {
            method: 'POST',
            body: JSON.stringify({
                nombre: formData.get('nombre'),
                telefono: formData.get('telefono'),
                mensaje: formData.get('mensaje'),
                twilioNumber,
                accountSID,
                authToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Mensaje de SMS enviado exitosamente.');
            } else {
                alert('Hubo un error al enviar el mensaje de SMS. Por favor, inténtalo de nuevo más tarde.');
            }
        })
        .catch(error => {
            alert('Hubo un error al enviar el mensaje de SMS. Por favor, inténtalo de nuevo más tarde.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const smsForm = document.getElementById('sms-form');
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');
    const mensajeInput = document.getElementById('mensaje');
    const enviarButton = document.getElementById('enviar-sms');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    enviarButton.addEventListener('click', function() {
        const nombre = nombreInput.value;
        const telefono = telefonoInput.value;
        const mensaje = mensajeInput.value;

        // Aquí puedes agregar lógica para enviar el SMS o hacer lo que necesites con los datos.
        enviarButton.addEventListener('click', function() {
            const nombre = nombreInput.value;
            const telefono = telefonoInput.value;
            const mensaje = mensajeInput.value;
        
            // Aquí puedes realizar una solicitud AJAX para enviar el SMS o realizar la acción necesaria.
            // Por simplicidad, este ejemplo mostrará una alerta con los datos del formulario.
        
            const datosSMS = {
                nombre,
                telefono,
                mensaje
            };
        
            // Simulación de una solicitud AJAX (puedes reemplazarlo con tu lógica real de envío de SMS).
            setTimeout(function() {
                // Muestra una alerta con los datos del SMS.
                alert('Mensaje SMS enviado:\nNombre: ' + datosSMS.nombre + '\nTeléfono: ' + datosSMS.telefono + '\nMensaje: ' + datosSMS.mensaje);
        
                // Restablece el formulario
                smsForm.reset();
        
                // Muestra el mensaje de confirmación
                smsForm.style.display = 'none';
                mensajeEnviado.style.display = 'block';
            }, 1000); // Simula una demora de 1 segundo (puedes ajustar esto).
        
            // Debes reemplazar esta parte con la lógica real para enviar el SMS.
        });
        
        // Muestra el mensaje de confirmación
        smsForm.style.display = 'none';
        mensajeEnviado.style.display = 'block';
    });
});
