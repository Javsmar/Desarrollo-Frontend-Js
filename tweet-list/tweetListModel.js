// Esta función toma una lista de tweets y transforma cada tweet en un nuevo objeto
// con propiedades específicas.
const transformTweets = (tweets) => {
  return tweets.map(tweet => ({
    handler: tweet.author,        // Mapea el autor del tweet a la propiedad "handler".
    date: new Date().toISOString(), // Genera la fecha actual en formato ISO y la asigna a "date".
    message: tweet.message,      // Mapea el mensaje del tweet a la propiedad "message".
    likes: tweet.likes.length,   // Calcula la cantidad de "likes" basada en la longitud de la lista de likes y la asigna a "likes".
    photo: tweet.img,          // Mapea la imagen del tweet a la propiedad "photo".
    id: tweet.id                 // Mapea el identificador único del tweet a la propiedad "id".
  }))
}

// Esta función realiza una solicitud a una API para obtener una lista de tweets.
export const getTweets = async () => {
  const url = "http://localhost:8000/api/tweets"; // URL de la API de tweets
  let parsedTweets = []; // Inicializa una variable para almacenar los tweets procesados.

  try {
    const response = await fetch(url); // Realiza una solicitud a la API y espera la respuesta.
    const tweets = await response.json(); // Convierte la respuesta en formato JSON y espera la conversión.
    parsedTweets = transformTweets(tweets); // Transforma los tweets llamando a la función "transformTweets".
  } catch (error) {
    throw error; // En caso de error, lanza una excepción con el error.
  }

  return parsedTweets; // Devuelve los tweets procesados.
}
