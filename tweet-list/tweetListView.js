// Esta función toma un objeto "tweet" como argumento y construye un fragmento de HTML
// que representa el tweet junto con un enlace al detalle del tweet.
export const buildTweet = (tweet) => {
  return `
  <a href="./tweetDetail.html?id=${tweet.id}">
    <span>Autor: ${tweet.handler}</span><br>           
    <span>Fecha: ${tweet.date}</span><br>                  
    <img src="${tweet.photo}" alt="tweet image"> 
    <p>${tweet.message}</p>           
    <p>Likes: ${tweet.likes} likes</p>        
  </a>
`;
}

// Esta función devuelve un mensaje HTML que se mostrará si no hay tweets disponibles.
export const emptyTweets = () => {
  return `<h3>No hay tweets disponibles, disculpa las molestias.</h3>`;
}

