import { createUser } from "./signupModel.js";

// Controlador del formulario de registro
export const signupController = (signupForm) => {
  // Agrega un oyente de eventos para el envío del formulario y llama a la función 'validateForm'
  signupForm.addEventListener("submit", (event) => validateForm(event, signupForm));
}

// Función para validar y procesar el formulario
const validateForm = async (event, signupForm) => {
  event.preventDefault(); // Previene el envío predeterminado del formulario

  // Obtiene los elementos de entrada de correo electrónico, contraseña y confirmación de contraseña
  const email = signupForm.querySelector('#email');
  const password = signupForm.querySelector('#password');
  const passwordConfirmation = signupForm.querySelector('#password-confirmation');

  try {
    // Valida si el formulario es válido y llama a la función para crear un usuario si es así
    if (isFormValid(email, password, passwordConfirmation)) {
      await createUser(email.value, password.value);
      // Despacha un evento personalizado si se crea el usuario con éxito
      dispatchEvent('userCreated', {
        type: "success",
        message: 'Usuario creado correctamente',
      }, signupForm);
      window.location = './login.html'; // Redirige a la página de inicio de sesión
    }
  } catch (error) {
    // Despacha un evento personalizado si se produce un error al crear el usuario
    dispatchEvent('userCreated', {
      type: "error",
      message: error,
    }, signupForm);
  }
}

// Función para validar el formulario
const isFormValid = (email, password, passwordConfirmation) => {
  // Realiza validaciones de correo electrónico y contraseñas
  const emailValidation = isEmailValid(email);
  const passwordValidation = isPasswordValid(password, passwordConfirmation);
  return emailValidation && passwordValidation;
}

// Función para validar el formato del correo electrónico
const isEmailValid = (email) => {
  // Utiliza una expresión regular para verificar el formato del correo electrónico
  const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  let result = true;

  if (!emailRegExp.test(email.value)) {
    // Lanza un error si el correo electrónico no es válido
    throw 'El email no es correcto';
  }

  return result;
}

// Función para validar las contraseñas
const isPasswordValid = (password, passwordConfirmation) => {
  let result = true;

  if (password.value !== passwordConfirmation.value) {
    // Lanza un error si las contraseñas no coinciden
    throw 'las contraseñas no son iguales';
  }

  return result;
}

// Función para despachar eventos personalizados
const dispatchEvent = (eventName, data, signupForm) => {
  // Crea un evento personalizado con el nombre especificado y los datos proporcionados
  const event = new CustomEvent(eventName, {
    detail: data
  });

  // Despacha el evento en el formulario de registro
  signupForm.dispatchEvent(event);
}
