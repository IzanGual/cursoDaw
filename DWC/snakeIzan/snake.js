//////////////////////////////////////////////////////// INICIALIZACIÓN DE BARIABLES GLOBALES /////////////////////////////////////////////////////////


let recordsString = getCookie("record");
let fotillo = document.getElementById("fotoGameOver");
let puntos = document.getElementById("scoreActual");
let levelPrint = document.getElementById("level");
let tabla = document.getElementById("table");
let numFilas = 10;
let numCol = 10;
let matriz = [];
let x = numFilas - 5;
let y = numCol - 5;
let speed = 200;  
let direccion = "ArrowRight";  
let cuerpo = [
  [x,y-1],
  [x,y-2],
  [x,y-3],
  [x,y-4]
];

let cont = 5;
let puntuacion = 0;
let level = 0;


let filaRandom = Math.floor(Math.random()*numFilas);
  //console.log("FILA: "+filaRandom);
let colRandom = Math.floor(Math.random()*numCol);
  //console.log("COLUMNA: "+colRandom);

let booGameOver = false;

// Varuiable global para el intervalo
let loop 

//////////////////////////////////////////////////////// MAIN /////////////////////////////////////////////////////////


creaMatriz(numFilas, numCol);

crearTabla(matriz);


actualizarPos(x, y, cuerpo); 

generarComida();

moove();

CambiatamañoTabla();

function startGame() {
  
clearInterval(loop);

loop = setInterval(function() {
  
  moverEnDireccion(direccion);
 
  gameOver(); 
  
}, speed);


}


//////////////////////////////////////////////////////// FUNCIONES /////////////////////////////////////////////////////////


// Crea la matriz inicial con dos bucles simples
function creaMatriz(numFilas, numCol) {

  for (let i = 0; i < numFilas; i++) {

  
    matriz[i] = [];

    for (let j = 0; j < numCol; j++) {

     
      matriz[i][j] = 0;

    }
  }
}


// Crea la tabla INICIAL, no se usa para actualizar los elementos (snake)
function crearTabla(matriz) {

  let tabla = document.getElementById("table");

  for (let i = 0; i < matriz.length; i++) {

    let fila = document.createElement("tr");

    for (let j = 0; j < matriz[i].length; j++) {

      let celda = document.createElement("td");
      celda.textContent = matriz[i][j];

      fila.appendChild(celda);

    }

    tabla.appendChild(fila);
  }
}



// activamos el listener para saver que tecla se ha apretado
function moove() {
  document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "ArrowUp":
      case "w":
      case "W":
        if (direccion != "ArrowDown") {
            direccion = "ArrowUp";
        }
        break;
      case "ArrowDown":
      case "s":
      case "S":
        if (direccion != "ArrowUp") {
          direccion = "ArrowDown";
        }
        break;
      case "ArrowRight":
      case "d":
      case "D":
        if (direccion != "ArrowLeft") {
          direccion = "ArrowRight";
        }
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        if (direccion != "ArrowRight") {
          direccion = "ArrowLeft";
        }
        break;
      default:
        break;
    }
  });
}

// Segun el boton que apretemos cambiamos la direccion:

document.getElementById('arr').addEventListener('click', () => {
  if (direccion != "ArrowDown") {
    direccion = "ArrowUp";
}
});

document.getElementById('izq').addEventListener('click', () => {
  if (direccion != "ArrowRight") {
    direccion = "ArrowLeft";
  }
});

document.getElementById('aba').addEventListener('click', () => {
  if (direccion != "ArrowUp") {
    direccion = "ArrowDown";
  }
});

document.getElementById('der').addEventListener('click', () => {
  if (direccion != "ArrowLeft") {
    direccion = "ArrowRight";
  }
});


//Según la direccion llammamos a una funcion, utilizando el interval para que tenga delay/velocidad
function moverEnDireccion(direccion) {
 
  switch (direccion) {
    case "ArrowUp":
      topp();
      break;
    case "ArrowDown":
      down();
      break;
    case "ArrowRight":
      right();
      break;
    case "ArrowLeft":
      left();
      break;
    default:
      break;
  }
}


// En esta funcion actualizamos la posicion de la serpiente cada X milisegundos, tambien nos aseguramos de toda la logica:
function actualizarPos(x, y, cuerpo) {
  let tabla = document.getElementById("table");

  // Limpiamos toda la tabla paraevitar errores
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] == 8 || matriz[i][j] == 2) {
        matriz[i][j] = 0;
        tabla.rows[i].cells[j].innerText = "0"; 
        tabla.rows[i].cells[j].className = "fondo"; 
      }
    }
  }

  
  // Si la serpiente se choca con si misma gameover()
  for (let i = 0; i < cuerpo.length; i++) {
    if (cuerpo[i][0] === x && cuerpo[i][1] === y) {
      booGameOver = true;
    }
  }

  // Actualizar el cuerpo, desplazando las partes del cuerpo
  for (let i = cuerpo.length - 1; i > 0; i--) {
    cuerpo[i][0] = cuerpo[i - 1][0];  
    cuerpo[i][1] = cuerpo[i - 1][1];  
  }

  cuerpo[0][0] = x;  
  cuerpo[0][1] = y;  

  // Actualizar la cabeza
  matriz[x][y] = 8;  
  tabla.rows[x].cells[y].innerText = "8";  
  tabla.rows[x].cells[y].className = "cap";

  // Dibujar el cuerpo en la tabla
  for (let i = 1; i < cuerpo.length; i++) {
    let cx = cuerpo[i][0]; 
    let cy = cuerpo[i][1];  
    matriz[cx][cy] = 2;  
    tabla.rows[cx].cells[cy].innerText = "2";  
    tabla.rows[cx].cells[cy].className = "cos"; // Actualizar la clase del cuerpo
  }


  // Si la serpiente come hacermos esto
  if (x === filaRandom && y === colRandom) {

    // Añadir un nuevo segmento al final del cuerpo
    let ultimoSegmento = cuerpo[cuerpo.length - 1];
    cuerpo.push([ultimoSegmento[0], ultimoSegmento[1]]);

    //Sumamos puntuacion cuando come 
    puntuacion++;

    // Cada vez que la puntuacion sume 5 suvimos de nivel y la velocidad
    if(puntuacion == cont){
      cont += 5;
      levels();
    }

    // Actualizamos la puntuaciobn en el dom 
    puntos.innerHTML = (puntuacion);
    

    // Generamos una nueva comida
    generarComida();

  }
}


// Simplemente suvimos el nivel y la velicidad, si llega a valocidad 50 es el nivel maximo
function levels() {
let nivelPrint = document.getElementById("level");
if (speed > 50) {
  level++;
  speed-=15;
  nivelPrint.innerHTML = (level);
  startGame();
}
else {
  nivelPrint.innerHTML = ("NIVEL MÁXIMO");
}

}



// Funciones para mover la serpiente y actualizar la tabla
function right() {
  y++;
  if(y < numFilas) {
    actualizarPos(x, y, cuerpo);
  }
  else {
    booGameOver = true;
  }
  
}

function left() {
  y--;
  if(y >= 0) {
    actualizarPos(x, y, cuerpo);
  }
  else {
    booGameOver = true;
  }
  
}
function topp() {
  x--;
  if(x >= 0) {
    actualizarPos(x, y, cuerpo);
  }
  else {
    booGameOver = true;
  }
}

function down() {
  x++;
  if (x < numFilas) {
    actualizarPos(x, y, cuerpo);
  }
  else {
    booGameOver = true;
  }
  
}

function gameOver() {

  console.log("X" +x+ " Y"+y);
    if(booGameOver){
      clearInterval(loop);
      fotillo.style.visibility = 'visible';
      recordsString = records(puntuacion, recordsString);
      actualizarRecords();
      console.log("La has liado");
    }
}


// Generamos la comida
function generarComida() {
  do {
    filaRandom = Math.floor(Math.random() * numFilas);
    colRandom = Math.floor(Math.random() * numCol);
  } while (matriz[filaRandom][colRandom] !== 0); 

  matriz[filaRandom][colRandom] = "C"; 
  tabla.rows[filaRandom].cells[colRandom].innerText = "C"; 
  tabla.rows[filaRandom].cells[colRandom].className = "comida"; 
}


// Segun el tamaño seleccionado cambiamos el tamaño de la tabl ay su aspecto
function CambiatamañoTabla() {
  const celdas = document.getElementsByTagName("td");
  
  // Verifica el tamaño de filas y columnas
  if (numFilas == 8 && numCol == 8)  {
    for (let i = 0; i < celdas.length; i++) {
      celdas[i].style.width = "60px";
      celdas[i].style.height = "60px";
    }
  } else if (numFilas == 10 || numCol == 10) {
    for (let i = 0; i < celdas.length; i++) {
      celdas[i].style.width = "45px";
      celdas[i].style.height = "45px";
    }
  } else if (numFilas == 15 || numCol == 15) {
    for (let i = 0; i < celdas.length; i++) {
      celdas[i].style.width = "29px";
      celdas[i].style.height = "29px";
    }
  }
}


// Esta funcion elimina la tabla para que podamos resetear el juego sin problema
function eliminarTaula() {
  let tabla = document.getElementById("table");
  //mientras tenga un hijo delete
  tabla.innerHTML="";
}


// Reinicamos el juego restableciendo barables y llamando a las funciones necesarias
function restartGame() {
  clearInterval(loop); // Detiene el juego actual

  fotillo.style.visibility = 'hidden';
  

  START.disabled = false;// Desactivamos el boton para evitar posibles errores

  // Restablece las variables globales
  puntos.innerHTML = (" ");
  levelPrint.innerHTML = ("");
  

  cont = 5;
  puntuacion = 0;
  level = 0;
  x = numFilas - 5;
  y = numCol - 5;
  direccion = "ArrowRight";
  cuerpo = [
      [x, y - 1],
      [x, y - 2],
      [x, y - 3],
      [x, y - 4]
  ];
  speed = 200;  
  matriz = [];
  booGameOver = false;
  
  // Crea la matriz inicial y la tabla
  creaMatriz(numFilas, numCol);
  eliminarTaula();
  crearTabla(matriz);
  actualizarPos(x, y, cuerpo); 
  generarComida(); // Genera comida en una nueva posición
  CambiatamañoTabla(); // Ajusta el tamaño de las celdas
}




///////////////////////////////// START STIO Y ESO ///////////////////////////
const START = document.getElementById("start");
const STOP = document.getElementById("stop");
const RESTART = document.getElementById("restart");

START.addEventListener('click', function() {
  START.disabled = true;
  startGame();
});

STOP.addEventListener('click', function() {
  START.disabled = false;
  clearInterval(loop);
});

RESTART.addEventListener('click', function() {
  restartGame();

    
});


///////////////////////////////// DIFICULTAD///////////////////////////
const NOOB = document.getElementById("dif1");
const PRO = document.getElementById("dif2");
const LEGEND = document.getElementById("dif3");

NOOB.addEventListener('click', function() {
  speed = 400;
    alert("Dificultad NOOB seleccionada");
});

PRO.addEventListener('click', function() {
  speed = 200;
  alert("Dificultad PRO seleccionada");
});

LEGEND.addEventListener('click', function() {
  speed = 100;
  alert("Dificultad LEGEND seleccionada");
});

///////////////////////////////// TAMAÑO ///////////////////////////
const ocho = document.getElementById("tam1");
const diez = document.getElementById("tam2");
const quince = document.getElementById("tam3");

ocho.addEventListener('click', function() {
  numFilas = 8;
  numCol = 8;
  restartGame();

});

diez.addEventListener('click', function() {
  numFilas = 10;
  numCol = 10;
  restartGame();
});

quince.addEventListener('click', function() {
  numFilas = 15;
  numCol = 15;
  restartGame();
});

//////////////////////////////////// MODOS OSCURO Y CLARO ////////////////////////////

const modoOscuro = document.getElementById('modoOscuro');

// Verificar la kuki, cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  setCookie("record", recordsString, 30);  // crear la cookie
  let modoGuardado = getCookie("modo");
  actualizarRecords();
  
  if (modoGuardado === "oscuro") {
    document.body.classList.add('darkMode');
    modoOscuro.checked = true;
  } 
  else {
    document.body.classList.remove('darkMode');
    modoOscuro.checked = false;
  }

});

// listener del boton cambiar de modo
modoOscuro.addEventListener('change', function() {
  if (modoOscuro.checked) {
    // Añadir modo oscuro
    document.body.classList.add('darkMode');
    setCookie("modo", "oscuro", 30); // crear la cookie

  } else {
    // Quitar modo oscuro (volver al modo claro)
    document.body.classList.remove('darkMode');
    setCookie("modo", "claro", 30);  // crear la cookie

  }
});


//////////////////////////////////// FUNCIONES DE COOKIES PARA GUARDAR RECORDS////////////////////////////



function records(puntuacion, recordsString) {
  let recordsArray = [];

  
  if (recordsString !== "") {
    let partes = recordsString.split("!");
    for (let i = 0; i < partes.length; i++) {
      recordsArray.push(parseInt(partes[i], 10));
    }
  }

  // añadimos la nueva
  recordsArray.push(puntuacion);

  //ordenar
  for (let i = 0; i < recordsArray.length - 1; i++) {
    for (let j = i + 1; j < recordsArray.length; j++) {
      if (recordsArray[i] < recordsArray[j]) {
        let temp = recordsArray[i];
        recordsArray[i] = recordsArray[j];
        recordsArray[j] = temp;
      }
    }
  }

  // mas de cinco eliminamos
  while (recordsArray.length > 5) {
    recordsArray.pop();
  }

  // crear el string actualizado
  let updatedRecordsString = "";
  for (let i = 0; i < recordsArray.length; i++) {
    if (i > 0) {
      updatedRecordsString += "!";
    }
    updatedRecordsString += recordsArray[i];
  }

  return updatedRecordsString;
}



function actualizarRecords() {
  setCookie("record", recordsString, 30);

    let cookieValores = getCookie("record"); 

    
    let valoresSeparados = cookieValores.split('!');
    
    
    const recordDiv = document.getElementById('record');
    
    // limpiar para evitar errores
    recordDiv.innerHTML = '';
    
    // Mostrar cada valor en el div
    let listaRecords = "";
    let i = 1;
    valoresSeparados.forEach(function(valor) {
    let record = "record";
    let negro = "negro";
      
    listaRecords += "<p id="+record+" class="+negro+"><b> Posicion "+i+":</b></p> <p id="+record+" class="+negro+" >"+valor+" ps</p>";

      i++;
    });

    recordDiv.innerHTML = (listaRecords); // Agregar el contenido 

}




//////////////////////////////////// FUNCIONES DE COOKIES ////////////////////////////

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}














