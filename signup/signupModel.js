
export const createUser = async (email, password) => {
  const url = "http://localhost:8000/auth/register";

  // Crea un objeto "body" con el correo electrónico y la contraseña proporcionados
  const body = {
    username: email,
    password: password,
  }

  let response;
  try {
    // Realiza una solicitud HTTP POST a la URL especificada con los datos del cuerpo en formato JSON
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body), // Convierte el objeto "body" a JSON
      headers: {
        'Content-type': 'application/json' // Establece el encabezado "Content-type" para indicar que se envía JSON
      }
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa (código de respuesta HTTP diferente a 200), lanza un error
      const data = await response.json();
      throw new Error(data.message); // Lanza un error con el mensaje proporcionado por el servidor
    }
  } catch (error) {
    if (error.message) {
      // Si el error contiene un mensaje, lanza un error con ese mensaje
      throw error.message;
    } else {
      // De lo contrario, lanza el error original
      throw error;
    }
  }
};
