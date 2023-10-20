// Esta función se encarga de realizar una solicitud de inicio de sesión al servidor.
export const loginUser = async (email, password) => {
  // Establece la URL de destino para la solicitud de inicio de sesión.
  const url = 'http://localhost:8000/auth/login';

  // Crea un objeto "body" que contiene los datos de inicio de sesión (correo y contraseña).
  const body = {
    username: email,
    password: password,
  }

  let response; // Variable para almacenar la respuesta de la solicitud.
  try {
    // Realiza una solicitud HTTP POST al servidor.
    response = await fetch(url, {
      method: "POST", // Método de la solicitud HTTP.
      body: JSON.stringify(body), // Convierte el objeto "body" en una cadena JSON y lo envía en el cuerpo de la solicitud.
      headers: {
        'Content-type': 'application/json' // Encabezados de la solicitud que indican que se está enviando JSON.
      }
    });

    // Analiza la respuesta del servidor como JSON y almacena la respuesta en la variable "data".
    const data = await response.json();

    // Verifica si la respuesta no fue exitosa (código de estado diferente de 200).
    if (!response.ok) {
      // Lanza un error con el mensaje proporcionado por el servidor.
      throw new Error(data.message);
    }

    // Si la respuesta fue exitosa (código de estado 200), se retorna el token de acceso (accessToken) del usuario.
    if (response.ok) {
      return data.accessToken;
    }
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la solicitud.
    if (error.message) {
      // Si el error contiene un mensaje, lanza un error con ese mensaje.
      throw error.message;
    } else {
      // Si el error no contiene un mensaje, lanza el propio error.
      throw error;
    }
  }
}

