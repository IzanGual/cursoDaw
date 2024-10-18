
function mayorEdad() {
    let edad = parseInt(prompt("Introduce tu edad !"));
    if (edad < 18){
        alert("Eres menor de edad");
    }
    else{
        alert("Eres mayor de edad");
    }
}

function calcPreu() {
    let ciudad = prompt("Donde vives ?");
    ciudad = ciudad.toLowerCase();


    if (ciudad == "benicassim" || "oropesa"){
        alert("El precio es de 20 €")
    }
    else{
        alert("El precio es de 30 €")
    }

}

function check(){
    let num = parseInt(prompt("Introduce un número"));

    if(typeof(num)=="int"){
        if(num == 0){
            alert("El número es un 0");
        }
        else if(num > 0){
            alert("El número es positivo")
        }
        else{
            alert("El númerpo es negativo")
        }
    }
    
    else{
        alert("No es un número ")
    }
}

function cuantoPago(){
    let edad = parseInt(prompt("Introduce tu edad"));
    

    if (edad < 18){
        alert("Eres menor de edad y pagues 0€");
    }
    else{
        let municipio = prompt("Introduce tu poblacion");
        municipio = municipio.toLocaleLowerCase();
        if (municipio == "benicassim"){
            alert("El precio es de 20 €")
        }
        else if (municipio == "oropesa"){
            alert("El precio es de 25 €")
        }
        else{
            alert("El precio es de 30€")
        }
    }

}

function calcNota() {
    let nota = parseInt(prompt("Introdce tu nota (UN NUMERO)"));
    if(nota < 5){
        alert("INSUFICIENT");
    }
    else if(nota < 6){
        alert("SUFICIENT");
    }
    else if(nota < 7){
        alert("BÉ");
    }
    else if(nota <= 9){
        alert("NOTABLE");
    }
    else if(nota > 9){
        alert("EXCEL·LENT");
    }
}

function login() {
    const usuario = "izan";
    const password = "1234";

    let nom = document.getElementById("nom").value;
    let psswd = document.getElementById("psswd").value;
    

    if(usuario == nom && psswd == password){
        redirigir();
    }
    else{
        alert("Dades incorrectes");
    }

}
function volver(){
    window.location.href = 'index.html';
}

function redirigir() {
    window.location.href = 'hola.html';
}

function loginMejor() {
    const usuario = "033e5426fba5cbf1bfdbd61fb6998d91";
    const password = "81dc9bdb52d04dc20036dbd8313ed055";

    let nom = document.getElementById("nomm").value;
    let psswd = document.getElementById("psswdd").value;
    console.log("aqui");

    nom = obtenerHashMD5(nom);  
    psswd = obtenerHashMD5(psswd);

    if(usuario == nom && psswd == password){
        redirigir();
    }
    else{
        alert("Dades incorrectes");
    }
}

function obtenerHashMD5(texto) {
        return CryptoJS.MD5(texto).toString();
    }










