// Definición de la función que construye notificaciones
export const buildNotification = (message, type) => {
  return `
    <div class="notification ${type}">
      <p>${message}</p>
    </div>
  `
}
