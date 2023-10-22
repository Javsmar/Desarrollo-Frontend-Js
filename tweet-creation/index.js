import { tweetCreationController } from "./tweetCreationController.js";
import {notificationsController}  from "../notifications/notificationsController.js"

const token = localStorage.getItem('token');
if(!token){
    window.location = './index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const tweetCreation = document.querySelector('#tweetCreation');
    
    const notifications = document.querySelector('#notification');
    const showNotification =  notificationsController(notifications);

    tweetCreation.addEventListener('tweetCreated', (event) => {
        showNotification(event.detail.message, event.detail.type);
    });
    tweetCreationController(tweetCreation);
});