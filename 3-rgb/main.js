// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, 
// y una vez ingresado ponga el color de fondo del body con dicho color. 
// Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
const body = document.querySelector('body');

const colorRojo = prompt('Hola! ¿Podrías elegir un número entre el 0 y el 255?');
const colorVerde = prompt('¿Podrías elegir otro número entre el 0 y el 255?');
const colorAzul = prompt('Ya es el último! ¿Podrías elegir un número entre el 0 y el 255?');
alert(`Elegiste los números: ${colorRojo}, ${colorVerde} y ${colorAzul}`);

body.style.backgroundColor = `rgb(${colorRojo}, ${colorVerde}, ${colorAzul})`;
