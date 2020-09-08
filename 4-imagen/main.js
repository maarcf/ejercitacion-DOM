// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen 
// (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida 
// modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px

const rtaTamanioFoto = prompt(`¿En que tamaño te gustaría ver la foto?
Las opciones son:
- Chica
- Mediana
- Grande`);

const rtaNormalizada = rtaTamanioFoto.toLowerCase();

const contenedorImg = document.querySelector('.contenedor-img');

contenedorImg.classList.remove('chica', 'mediana', 'grande')

const tamanioElegido = size => {
  if (size === 'chica') {
   contenedorImg.classList.add('chica')
  }
  else if (size === 'mediana') {
   contenedorImg.classList.add('mediana')
  }
  else if (size === 'grande') {
   contenedorImg.classList.add('grande')
  }
  else {
    alert('No es un formato válido.')
  }
}
tamanioElegido(rtaNormalizada)