// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante 
// un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente 
// (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

const rtaProgreso = prompt('¿Cuál es el porcentaje de progreso?');
const barraProgreso = document.querySelector('.barra-progreso');
const porcentajeCompletado = document.querySelector('.porcentaje-completado');

const calcularPorcentaje = num => {
  num = Number(num);
  let porcentaje = (num / 100) * 800 //ese 800 es el width de la barra contenedora
  return (barraProgreso.style.width = `${porcentaje}px`) && (porcentajeCompletado.textContent = `${num}% completado`)
}
calcularPorcentaje(rtaProgreso)