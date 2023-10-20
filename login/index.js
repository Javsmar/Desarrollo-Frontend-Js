// Importa el controlador de inicio de sesión y el controlador de loader (cargador) desde otros archivos.
import { loginController } from "./loginController.js";
import { loaderController } from '../loader/loaderController.js';

// Espera a que se cargue completamente el contenido de la página antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el formulario de inicio de sesión en el DOM utilizando su ID.
  const loginForm = document.querySelector('#login');

  // Selecciona el elemento de loader (cargador) en el DOM utilizando su ID.
  const loader = document.querySelector('#loader');

  // Desestructura el objeto devuelto por la función "loaderController" en las funciones "show" y "hide".
  const { show, hide } = loaderController(loader);

  // Agrega un evento que escucha el inicio del proceso de inicio de sesión.
  loginForm.addEventListener('startLoginUser', () => {
    // Muestra el loader (cargador) utilizando la función "show" del controlador de loader.
    show();
  });

  // Agrega un evento que escucha la finalización del proceso de inicio de sesión.
  loginForm.addEventListener('finishLoginUser', () => {
    // Oculta el loader (cargador) utilizando la función "hide" del controlador de loader.
    hide();
  });

  // Inicializa el controlador de inicio de sesión y pasa el formulario de inicio de sesión como argumento.
  loginController(loginForm);
})
