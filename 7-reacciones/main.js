// En un documento html hacer un post de una red social que contenga:
// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que
// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, 
// tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante 
// tres prompts por la cantidad de cada una de las reacciones 
// y actualice los valores de los spans correspondientes

const likeNumber = document.getElementById('num-like');
const loveNumber = document.getElementById('num-love');
const surpriseNumber = document.getElementById('num-surprise');

const rtaLikes = prompt('¿Cuántos me gusta tiene?');
const rtaLoves = prompt('¿Cuántos me encanta tiene?');
const rtaSurprise = prompt('¿Cuántos me asombra tiene?');

const cantidadReacciones = (num, reaction) => {
  num = Number(num);
  reaction.textContent = num
}

cantidadReacciones(rtaLikes, likeNumber);
cantidadReacciones(rtaLoves, loveNumber);
cantidadReacciones(rtaSurprise, surpriseNumber);