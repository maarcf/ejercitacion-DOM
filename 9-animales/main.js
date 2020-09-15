// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. 
// Hacer un programa que al iniciarse pregunte mediante un prompt por un animal 
// (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

const animales = document.querySelectorAll('.animal');
const rtaAnimal = prompt('¿Qué animal te gustaría ver? las opciones son: Tigre, Loro y Perro');


const seleccionarAnimal = elegido => {
  elegido = elegido.toLowerCase();
  
  if (elegido === 'tigre') {
    animales[1].classList.add('no-mostrar');
    animales[2].classList.add('no-mostrar');
  }
  else if (elegido === 'loro') {
    animales[0].classList.add('no-mostrar');
    animales[2].classList.add('no-mostrar');
  }
  else if (elegido === 'perro') {
    animales[0].classList.add('no-mostrar');
    animales[1].classList.add('no-mostrar');
  }
  else {
    alert('No es un formato válido')
  }
};

seleccionarAnimal(rtaAnimal);
