export const messageError = {
  nombre: {
    valueMissing: "Cadena muy corta o campo vasio.",
    patternMismatch: `Ni numeros, ni simbolos.`,
  },
  email: {
    valueMissing: "Cadena muy corta o campo vasio.",
    typeMismatch: "El correo no es valido.",
  },
  contraseña: {
    valueMissing: "Cadena muy corta o campo vasio.",
    patternMismatch: `Al menos una letra mayúscula, al menos una letra minúscula,
                    al menos un número o caracter especial, longitud sea como 
                    mínimo 6 caracteres maximo 12.`,
  },
  nacimiento: {
    valueMissing: "Cadena muy corta o campo vasio.",
    customError: "Debes tener al menos 18 años.",
  },
  numero: {
    tooShort: "Deben ser 10 numeros, faltan numeros",
    patternMismatch: "Son 10 numeros XXXXXXXXXX.",
  },
  direccion:{
    patternMismatch: "Minimo 10 cartesres maximo 40",
  },
  ciudad:{
    patternMismatch: "Minimo 10 cartesres maximo 40",
  },
  estado:{
    patternMismatch: "Minimo 10 cartesres maximo 40",
  },
};

export const tipoError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
  "tooShort",
];
