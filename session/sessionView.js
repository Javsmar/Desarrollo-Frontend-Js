// Función para construir la interfaz de usuario de sesión no autenticada
export const buildUnauthorizedSession = () => {
  return `<ul>
    <li>
      <a href="./login.html">Login</a>
      <a href="./signup.html">Signup</a>
    </li>
  </ul>`;
}

// Función para construir la interfaz de usuario de sesión autenticada
export const buildAuthenticatedSession = () => {
  return `<button>Cerrar sesión</button>`;
}
