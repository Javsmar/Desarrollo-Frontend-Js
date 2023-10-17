// Importa el controlador de registro y el controlador de notificaciones
import { signupController } from "./signupController.js";
import { notificationsController } from "../notifications/notificationsController.js";

// Obtiene el formulario de registro y la sección de notificaciones del DOM
const signupForm = document.querySelector('#signup');
const notificationsSection = document.querySelector('#notifications');

// Crea una función para mostrar notificaciones utilizando el controlador de notificaciones
const showNotification = notificationsController(notificationsSection);

// Llama al controlador de registro pasando el formulario como argumento
signupController(signupForm);

// Agrega un oyente de eventos al formulario de registro para 'userCreated' (evento personalizado)
signupForm.addEventListener('userCreated', (event) => {
  // Muestra una notificación utilizando la función 'showNotification' con los detalles del evento
  showNotification(event.detail.message, event.detail.type);
});

