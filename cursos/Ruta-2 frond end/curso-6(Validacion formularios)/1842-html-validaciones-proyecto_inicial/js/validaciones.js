import { messageError, tipoError } from "./globlas.js";
export const valida = (input) => {
  const tipoInput = input.dataset.tipo;
  if (validadores[tipoInput]) {
    validadores[tipoInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
  } else {
    input.parentElement.classList.add("input-container--invalid");
    viewMessageError(tipoInput, input);
  }
};

const viewMessageError = (tipoInput, input) => {
  tipoError.forEach((error) => {
    console.log(input.validity);
    if (input.validity[error]) {
      const message = messageError[tipoInput][error];
      input.parentElement.querySelector(".input-message-error").innerHTML =
        message;
      return;
    }
  });
};

const validarEdad = (input) => {
  const fecha = new Date(input.value);
  const isMayor = mayorEdad(fecha);
  input.setCustomValidity(!isMayor && "Debes tener al menos 18 años");
};

const validadores = {
  nacimiento: (input) => validarEdad(input),
};

const mayorEdad = (fecha) => {
  const fechaActual = new Date();
  const diferenciaFecha = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFecha <= fechaActual;
};
