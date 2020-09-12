// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, 
// y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, 
// Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, 
// siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

const rtaTemperatura = prompt('¿Cuál es la temperatura? Sólo el número');
const contenedorH1 = document.querySelector('.cotenedor-h1');
const titulo = document.getElementById('titulo-principal');

const temperatura = temp => {
  temp = Number(temp);
  let agregarTexto = titulo.textContent = `Temperatura Actual: ${temp}°C`;
  if (temp < 0) {
    contenedorH1.style.backgroundColor = '#004E64';
    agregarTexto;
  }
  else if (temp >= 0 && temp < 15) {
    contenedorH1.style.backgroundColor = '#00A5CF';
    agregarTexto;
  }
  else if (temp >= 15 && temp < 25) {
    contenedorH1.style.backgroundColor = '#13AA5F';
    agregarTexto;
  }
  else if (temp >= 25 && temp < 30) {
    contenedorH1.style.backgroundColor = '#FFDF00';
    agregarTexto;
  }
  else if (temp >= 30 && temp < 35) {
    contenedorH1.style.backgroundColor = '#FC980C';
    agregarTexto;
  }
  else if (temp >= 35) {
    contenedorH1.style.backgroundColor = '#F41800';
    agregarTexto;
  }
  else {
    alert('No es un formato válido');
  };
};

temperatura(rtaTemperatura);
