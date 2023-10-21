// Esta función toma una lista de tweets y transforma cada tweet en un nuevo objeto
// con propiedades específicas.
const transformTweets = (tweets) => {
  return tweets.map(tweet => ({
    handler: tweet.user.username,   // Mapea el autor del tweet a la propiedad "handler".
    date: new Date().toISOString(),// Genera la fecha actual en formato ISO y la asigna a "date".
    message: tweet.message,      // Mapea el mensaje del tweet a la propiedad "message".
    id: tweet.id                 // Mapea el identificador único del tweet a la propiedad "id".
  }))
}

// Esta función realiza una solicitud a una API para obtener una lista de tweets.
export const getTweets = async () => {
  //?_expand=user" que es un query params que indica que se desea expandir la información relacionada con el usuario que la creo el tweet en la respuesta de la solicitud.
  const url = "http://localhost:8000/api/tweets?_expand=user"; // URL de la API de tweets
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
