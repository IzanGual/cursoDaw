// EJERCICIO 1

function ej1() {
    let listaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    let num = parseInt(prompt("Dame un número del 0 al 6"));
    if(num > 0 && num < 6){
        alert(listaSemana[num]);
    }
    else{
        alert("introduce un número correcto")
    }
 
}


// EJERCICIO 2

function muestraSumaLista() {
    let lista =  [1,2,3,4,5,6,7,8,9,10];
    alert(sumaLista(lista));
}

function sumaLista(list) {
    let suma=0;
    for (let i = 0; i < list.length; i++){
        suma += list[i];    
    }
    return parseInt(suma);
}

// EJERCICIO 3

function ej3() {
    let list = [];
    let listPares = [];
    let listImpares = [];
    let numDos = -1;  
    let i = 0;

    
    while (numDos !== 0 && !isNaN(numDos)) {
        let num = prompt("Introduce el número que irá en la posición " + i);
        numDos = parseInt(num); 

        if (!isNaN(numDos) && numDos !== 0) {  
            list[i] = numDos;

            if (numDos % 2 === 0) {
                listPares.push(numDos);  
            } else {
                listImpares.push(numDos);  
            }

            i++;
        }
    }

    alert("Array completo: [" + list + "]\nPares: [" + listPares + "]\nImpares: [" + listImpares + "]");
}

// EJERCICIO 4

function ej4() {
    let arr = [5,2,3,4,5,6,7,8,1];
    let letra = "v";
    alert(min(arr, letra));
}


function min(arr, letra) {
    
    let indice = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
            indice = i;
        }
    }

    if(letra == "i") {
        return indice;
    }
    else if (letra == "v"){
        return min;
    }
}

// EJERCICIO 5

// EJERCICIO 5

function ej5() {
    let str = "";
    let boo = false;
    
    // Cambiamos 'arr' a un array de arrays
    let arr = [
        ["lunes", "maria"], 
        ["martes", "luis"], 
        ["miercoles", "antonia"], 
        ["jueves", "pedro"], 
        ["viernes", "marisa"]
    ];
    
    let dia = prompt("Introduce el día de la semana que quieres consultar");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toString() === dia.toLowerCase()) {
            str = "El " + dia + " se encarga: " + arr[i][1];
            boo = true;
            break;  
        }
    }
    
    if (!boo) {
        alert("NO HAY SERVICIO");
    } else {
        alert(str);
    }
}

// EJERCICIO 6

function ej6() {
    let str = "";
    let boo = false;
    
    let arr = [
        ["monitor", "200€"], 
        ["teclado", "20€"], 
        ["raton", "10€"], 
        ["portatil", "100€"], 
        ["pc", "400€"]
    ];
    
    let pr = prompt("Introduce el producto que quieres consultar");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].toString() === pr.toLowerCase()) {
            boo = true;
            str = "El precio de " + pr + " es: " + arr[i][1];
            break; 
        }
    }
    
    if (!boo) {
        alert("NO HAY NINGUN PRODUCTO CON ESE NOMBRE");
    } else {
        alert(str);
    }
}

// EJERCICIO 7

function ej7(dia, hora) {
    let horario = [
        ["EIE", "Client", "EIE", "Diseñ inter web", "Despl apps web"],
        ["Despl apps web", "Servidor", "Servidor", "Client", "Servidor"],
        ["Diseñ inter web", "EIE", "Client", "Inglés", "Servidor"],
        ["Inglés", "Servidor", "Servidor", "Client", "Client"],
        ["Diseñ inter web", "Client", "Servidor", "Servidor", "Client"]
    ];

    alert(horario[dia][hora]);
    
}

