
function saluda() {
    let nombre = prompt("Introduce tu nombre");
    let apellido = prompt("Introduce tu apellido");
    alert("Holaa! "+nombre+" "+apellido+"");
}

function suma() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce otro numero para sumarlos"));
    let res = num1 + num2;
    alert("La suma de "+num1+" i de "+num2+" es "+res);
}

function multiplica() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce otro numero para multiplicartlos"));
    let res = num1 * num2;
    alert("La multiplicacion de "+num1+" i de "+num2+" es "+res);
}

function edad() {
    let num1 = parseInt(prompt("En que año naciste?"));
    let num2 = parseInt(prompt("En que años estamos?"));
    let res = num2 - num1;
    alert("Durante este año cumpliras "+res+" años");
}

function date() {

    const ahora = new Date;

    let date = new Date(document.getElementById("date").value);

    let edad = ahora - date;
    
    edad = edad/1000/60/60/24/365;
    edad = parseInt(edad);
    alert("Durante este año cumpliras "+edad+" años");
}
