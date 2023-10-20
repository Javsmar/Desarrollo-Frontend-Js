import { buildUnauthorizedSession, buildAuthenticatedSession  } from "./sessionView.js";

// Controlador de la sesión del usuario
export const sessionController = (nav) => {
  // Comprueba si el usuario ha iniciado sesión
  if (isUserLoggedIn()) {
    // Si el usuario ha iniciado sesión, muestra la sesión autenticada en la barra de navegación
    // lo cual  mostraría el boton de cerrar sesión porque ya esta logeado
    nav.innerHTML = buildAuthenticatedSession();//asignas el contenido HTML generado por buildAuthenticatedSession al elemento nav.innerHTML. 
    const logoutButton = nav.querySelector('button');//logoutButton es una referencia al botón en el DOM que te permite interactuar con él, cambiar su apariencia, agregar funcionalidad, etc.

    // Agrega un oyente de eventos al botón de cierre de sesión para manejar la acción de cierre de sesión
    logoutButton.addEventListener('click', () => {
      // Elimina el token de autenticación almacenado en el almacenamiento local del navegador
      localStorage.removeItem('token');//elimina el elemento con la clave "token" del almacenamiento local, lo que efectivamente revoca el acceso autenticado y marca al usuario como desconectado.
      // Actualiza la sesión para mostrar la versión no autenticada
      sessionController(nav);
    });
  } else {
    // Si el usuario no ha iniciado sesión, muestra la sesión no autenticada en la barra de navegación
    nav.innerHTML = buildUnauthorizedSession();
  }
}

// Función para verificar si el usuario ha iniciado sesión
const isUserLoggedIn = () => {
  // Verifica si existe un token de autenticación en el almacenamiento local
  return localStorage.getItem('token');
}


