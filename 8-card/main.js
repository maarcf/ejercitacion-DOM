// Hacer un programa que al iniciarse pregunte mediante prompts por
// un título, una url de una imagen, una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
// centrarla con respecto a la pantalla, agregarle un borde, agregarle un sombreado
// cambiarle la tipografía, cambiarle los tamaños de fuente, cambiarle los colores por defecto

const imagenSeleccionada = document.getElementById('img-tarjeta');
const tituloTarjeta = document.querySelector('#titulo-tarjeta');
const linkSeleccionado = document.querySelector('#link-tarjeta');

const rtaImagen = prompt('Hola, ¿qué imagen te gustaría ver? Poné aquí la url completa');
const rtaTitulo = prompt('¿Qué titulo te gustaría que tenga a la tarjeta?');
const rtaLink = prompt('¿A qué link se puede ir para leer más?');

// cambiar el src de la img
  imagenSeleccionada.src = `${rtaImagen}`;

// cambiar el textContent del H1
  tituloTarjeta.textContent = `${rtaTitulo}`;

// cambiar el href del link
  linkSeleccionado.href = `${rtaLink}`;




