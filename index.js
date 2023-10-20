import { notificationsController } from "./notifications/notificationsController.js";
import { tweetListController } from "./tweet-list/tweetListController.js";
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js";

// Obtener el elemento "notifications" del documento HTML
const notifications = document.getElementById('notifications');

// Crear una función para mostrar notificaciones y almacenarla en "showNotification"
const showNotification = notificationsController(notifications);

// Obtener el elemento "loader" del documento HTML
const loader = document.getElementById('loader');

// Crear funciones para mostrar y ocultar el loader y almacenarlas en "show" y "hide"
const { show, hide } =  loaderController(loader);

// Esperar a que el documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
  // Obtener el elemento "tweets" del documento HTML
  const tweetList = document.getElementById('tweets');

  // Agregar oyentes de eventos para el manejo de eventos relacionados con los tweets
  tweetList.addEventListener('tweetsLoaded', (event) => {
    // Mostrar notificaciones cuando los tweets se carguen
    showNotification(event.detail.message, event.detail.type);
  });
  tweetList.addEventListener('startLoadingTweets', () => {
    // Mostrar el loader cuando comienza la carga de tweets
    show();
  });
  tweetList.addEventListener('finishLoadingTweets', () => {
    // Ocultar el loader cuando se completa la carga de tweets
    hide();
  });

  // Iniciar el controlador de tweets
  tweetListController(tweetList);

  // Obtener el elemento "session" del documento HTML
  const session = document.getElementById('session');

  // Iniciar el controlador de sesión
  sessionController(session);
});

// Agregar un oyente de eventos para detectar la pérdida de conexión a Internet
window.addEventListener('offline', () => {
  showNotification('Se ha perdido la conexión', 'error');
});
