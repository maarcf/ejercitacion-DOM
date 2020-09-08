// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, 
// y una vez ingresado muestre un saludo con el nombre dentro de un h1. 
// El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

const nombreUsuarie = prompt('Hola! ¿Cúal es tu nombre?');
const saludo = document.querySelector('.saludo');

const normalizarNombre = nombre => {
  nombre = nombre.trim();
  const primeraLetra = nombre.charAt(0).toUpperCase();
  const restoDelNombre = nombre.slice(1, nombre.length).toLowerCase();
  const unirNombre = primeraLetra.concat(restoDelNombre);
  return unirNombre;
}

let saludarUsuarie = normalizarNombre(nombreUsuarie);

saludo.textContent = `> Hola ${saludarUsuarie}! ¡que tengas lindo día!;`