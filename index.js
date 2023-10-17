import { notificationsController } from "./notifications/notificationsController.js";
import { tweetListController } from "./tweet-list/tweetListController.js";
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js";

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);
const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const tweetList = document.getElementById('tweets');
  
  tweetList.addEventListener('tweetsLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type)
  })
  tweetList.addEventListener('startLoadingTweets', () => {
    show();
  })
  tweetList.addEventListener('finishLoadingTweets', () => {
    hide();
  })

  tweetListController(tweetList);

  const session = document.getElementById('session');
  sessionController(session);
  
})


window.addEventListener('offline', () => {
  showNotification('Se ha perdido la conexión', 'error');
})
