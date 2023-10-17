// Importar la función buildNotification desde 'notificationsView.js'
import { buildNotification } from './notificationsView.js';

// Definir un controlador de notificaciones que toma un elemento 'notifications' como argumento
export const notificationsController = (notifications) => {
  
  // Definir la función 'showNotification' que toma un 'message' (mensaje) y un 'type' (tipo) como argumentos
  const showNotification = (message, type) => {
    // Establecer el contenido del elemento 'notifications' usando la función 'buildNotification'
    // Esto construirá una notificación basada en el 'message' y el 'type' proporcionados
    notifications.innerHTML = buildNotification(message, type);

    // Configurar un temporizador para eliminar la notificación después de 3000 milisegundos (3 segundos)
    setTimeout(() => {
      notifications.innerHTML = '';
    }, 3000);
  }

  // Devolver la función 'showNotification' para que pueda ser utilizada desde otros lugares
  return showNotification;
}
