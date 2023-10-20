import { buildLoader } from './loaderView.js'

// Controlador del componente de carga el cula loader es el nodo del dom
export const loaderController = (loader) => {
  
  // Función para mostrar el componente de carga
  const showLoader = () => {
    loader.classList.add('active'); // Agrega la clase 'active' al elemento loader
    loader.innerHTML = buildLoader(); // Establece el contenido interno del loader utilizando buildLoader
  }
  
  // Función para ocultar el componente de carga
  const hideLoader = () => {
    loader.classList.remove('active'); // Elimina la clase 'active' del elemento loader
    loader.innerHTML = ''; // Vacía el contenido interno del loader
  }

  // El controlador devuelve un objeto con dos métodos
  return {
    show: showLoader, // Método para mostrar el componente de carga
    hide: hideLoader // Método para ocultar el componente de carga
  }
}

