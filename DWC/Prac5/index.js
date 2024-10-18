let img = document.getElementById("img");
let foto = document.getElementById("prova");
const cont = document.getElementById("contenedor");
const speed = 6;

let derecha = 1;
let izq = 1;
let arr = 1;
let av = 1;
let m = 1;
let contDerecha = 0;
let contIzq = 0;
let contArr = 0;
let contAv = 0;
let contK = 0;


  
    document.addEventListener("keydown", function(event) {
  
      let altura = cont.getBoundingClientRect().top;
      let lado = cont.getBoundingClientRect().left;
      
    
      switch (event.key) {
        case "ArrowUp":
          arrivaEspeña(altura);

          break;
    
        case "ArrowDown":
          spainDown(altura);
    
          break;
    
        case "ArrowRight":
          derechaEspaña(lado);

            break;
    
        case "ArrowLeft":
          izquierdaEspaña(lado);

          break;
    
        case "k":
          muerte()
            
            break;
           
        default:
          break;
      }
    });

let botonDerecha = document.getElementById("der");
botonDerecha.addEventListener('click', function() {
  let lado = cont.getBoundingClientRect().left;
  derechaEspaña(lado);
});

let botonIzquierda = document.getElementById("izq");
botonIzquierda.addEventListener('click', function() {
  let lado = cont.getBoundingClientRect().left;
  izquierdaEspaña(lado);
});

let botonArriva = document.getElementById("arr");
botonArriva.addEventListener('click', function() {
  let altura = cont.getBoundingClientRect().top;
  arrivaEspeña(altura);
});

let botonAbajo = document.getElementById("aba");
botonAbajo.addEventListener('click', function() {
  let altura = cont.getBoundingClientRect().top;
  spainDown(altura);
});

let kill = document.getElementById("k");
kill.addEventListener('click', function() {
  muerte()
});


function arrivaEspeña(altura) {
      cont.style.top = (altura - speed) + "px";
                img.setAttribute("src", "Arr"+arr+".png");
                if (contArr > 3) {
                  arr++;
                  contArr = 0;
                }
    
                contArr++;
             
                if (arr > 3) {
                  arr = 1;
                }
}

function spainDown(altura) {
  cont.style.top = (altura + speed) + "px";
          img.setAttribute("src" , "Av"+av+".png");

            if (contAv > 3) {
              contAv = 0;
              av++;
            }

            contAv++;

            if(av > 3) {
              av = 1;
            }
}

function derechaEspaña(lado) {
  cont.style.left = (lado + speed) + "px";
            img.setAttribute("src" , "D"+derecha+".png");
            if (contDerecha > 3) {
              derecha++;
              contDerecha = 0;
            }

            contDerecha++;
            
          
            if (derecha > 3) {
              derecha = 1;
            }
}

function izquierdaEspaña(lado){
  cont.style.left = (lado - speed) + "px";
          img.setAttribute("src" , "I"+izq+".png");
          if (contIzq > 3) {
            izq++;
            contIzq = 0;
          }

          contIzq++;

            if (izq > 3) {
              izq = 1;
            }
}

function muerte() {
  img.setAttribute("src" , "K"+m+".png");
            if(contK > 4){
              m++;
              contK = 0;
            }

            contK++;
            
            if (m > 4)   {
              img.setAttribute("src" , "K4.png");
            }
}



    


  





