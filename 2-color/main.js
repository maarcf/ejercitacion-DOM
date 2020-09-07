// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, 
// y una vez ingresado ponga el color de fondo del body con dicho color.

const body = document.querySelector('body');
const colorSeleccionado = prompt('Elige un color en Hexadecimal');


body.style.backgroundColor = '#'.concat(colorSeleccionado);
