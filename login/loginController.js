import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loginUser } from "./loginModel.js";

// Esta función es el controlador principal del formulario de inicio de sesión.
export const loginController = (loginForm) => {
  // Agrega un oyente de eventos para el evento "submit" del formulario.
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario (enviar la solicitud al servidor).

    // Llama a la función "submitLogin" cuando se envía el formulario.
    submitLogin(loginForm);
  });
}

// Esta función se encarga de manejar el proceso de inicio de sesión.
const submitLogin = async (loginForm) => {
  // Obtiene los datos de inicio de sesión (correo y contraseña) del formulario.
  const { email, password } = getLoginData(loginForm);

  try {
    // Despacha un evento personalizado "startLoginUser" para indicar que se ha iniciado el proceso de inicio de sesión.
    dispatchEvent('startLoginUser', null, loginForm);

    // Llama a la función "loginUser" para realizar el inicio de sesión y obtiene un token de autenticación (jwt).
    const jwt = await loginUser(email, password);
    
    // Muestra una alerta de éxito.
    alert('Inicio de sesión exitoso');

    // Almacena el token de autenticación en el almacenamiento local del navegador.
    // Esto permite que el token esté disponible para futuras solicitudes de la aplicación.
    localStorage.setItem('token', jwt);

    // Redirige al usuario a la página de inicio ("index.html").
    // utilizando window.location. Esto redirige al usuario a la página principal después del inicio de sesión exitoso.
    window.location = './index.html';
  } catch (error) {
    // Si ocurre un error durante el inicio de sesión, muestra una alerta con el mensaje de error.
    alert(error);
  } finally {
    // Despacha un evento personalizado "finishLoginUser" para indicar que se ha completado el proceso de inicio de sesión.
    dispatchEvent('finishLoginUser', null, loginForm);
  }
}

// Esta función obtiene los datos de inicio de sesión (correo y contraseña) del formulario.
const getLoginData = (loginForm) => {
  // Crea un objeto FormData a partir del formulario.
  const formData = new FormData(loginForm);

  // El objeto FormData es una forma de recopilar los datos del formulario de manera sencilla.
  // Cada campo del formulario se asocia a un par clave-valor en el objeto FormData.

  // Obtiene el valor del campo de correo electrónico y contraseña del objeto FormData.
  const email = formData.get('email');
  const password = formData.get('password');

  // Devuelve un objeto con los valores del correo electrónico y la contraseña.
  // Esto crea un objeto con dos propiedades: "email" y "password", que contienen los valores del formulario.
  return {
    email: email,
    password: password
  };
};



