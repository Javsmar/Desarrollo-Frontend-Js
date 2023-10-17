import { getTweets } from "./tweetListModel.js";
import { buildTweet, emptyTweets } from "./tweetListView.js";

// Esta función controla la lista de tweets y muestra los tweets en el elemento "tweetList"
export const tweetListController = async (tweetList) => {
  tweetList.innerHTML = ''; // Limpia cualquier contenido previo en el elemento "tweetList"
  let tweets = [];

  try {
    // Despacha un evento personalizado "startLoadingTweets" para notificar que la carga de tweets ha comenzado
    dispatchEvent('startLoadingTweets', null, tweetList);

    // Obtiene los tweets de la API utilizando la función "getTweets" y espera la respuesta
    tweets = await getTweets();
  } catch (error) {
    // En caso de error, crea un evento personalizado de tipo "error" con un mensaje específico
    const event = createCustomEvent('error', 'Error cargando tweets');
    // Despacha el evento para notificar del error
    tweetList.dispatchEvent(event);
  } finally {
    // Despacha un evento personalizado "finishLoadingTweets" para notificar que la carga de tweets ha finalizado (independientemente del resultado)
    dispatchEvent('finishLoadingTweets', null, tweetList);
  }

  if (tweets.length === 0) {
    tweetList.innerHTML = emptyTweets(); // Muestra un mensaje si no hay tweets disponibles
  } else {
    renderTweets(tweets, tweetList); // Renderiza los tweets en el elemento "tweetList"

    // Despacha un evento personalizado "success" para notificar que los tweets se han cargado correctamente
    const event = createCustomEvent('success', 'Tweets cargados correctamente');
    tweetList.dispatchEvent(event);
  }
}

// Renderiza los tweets en el elemento "tweetList"
const renderTweets = (tweets, tweetList) => {
  tweets.forEach(tweet => {
    const tweetContainer = document.createElement('div'); // Crea un contenedor div para representar cada tweet
    tweetContainer.classList.add('tweet'); // Agrega una clase CSS "tweet" al contenedor

    // Rellena el contenido del div con el resultado de la función "buildTweet"
    tweetContainer.innerHTML = buildTweet(tweet);

    tweetList.appendChild(tweetContainer); // Agrega el div del tweet al elemento "tweetList" en el DOM
  })
}

// Crea un evento personalizado con un tipo y un mensaje personalizados
const createCustomEvent = (type, message) => {
  const event = new CustomEvent("tweetsLoaded", {
    detail: {
      type: type,
      message: message
    }
  });

  return event;
}

// Despacha un evento personalizado con un nombre de evento y datos específicos a un elemento dado
const dispatchEvent = (eventName, data, element) => {
  const event = new CustomEvent(eventName, {
    detail: data
  });

  element.dispatchEvent(event);
}

