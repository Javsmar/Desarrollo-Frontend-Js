import { tweetDetailController } from "./tweetDetailController.js"
import {notificationsController} from "../notifications/notificationsController.js"


document.addEventListener('DOMContentLoaded', () => {
    // sacar id del tweet de la url: Crea una instancia de URLSearchParams a partir de la cadena de consulta en la URL actual.
    const params = new URLSearchParams(window.location.search);
    // Obtiene el valor del parámetro de consulta "id" de la URL actual.
    const tweetId = params.get("id");

    const notification = document.querySelector('#notifications');
    const showNotification = notificationsController(notification);
    
    // Llama a la función 'tweetDetailController' con el elemento "tweetDetail" y el "tweetId".
    // Esto configurará el controlador de la página de detalles del tweet y mostrará el tweet correspondiente.
    //El elemento tweetDetail es el contenedor en el que se mostrarán los detalles del tweet, como su contenido, el autor, la fecha, los comentarios, los "me gusta", etc. Al pasar este elemento como parámetro a tweetDetailController, la función sabe dónde renderizar los detalles del tweet y cómo interactuar con él.
    const tweetDetail = document.querySelector('#tweetDetail');
    

    tweetDetail.addEventListener('tweetLouder', (event) => {
        showNotification(event.detail.message, event.detail.type);
    });

    tweetDetailController(tweetDetail, tweetId);
});