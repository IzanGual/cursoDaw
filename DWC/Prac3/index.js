function cuantoSaludo() {
    let num = parseInt(prompt("Introduce la cantidad de saludos q quieres."));    
    for (let i = 0; i < num; i++){
        alert(i+1 +"Hola!");
    }
}

function multiplica() {
    let num = 1;
    let res = 1;
    while (num != 0){
        res = res * num
        num = parseInt(prompt("Introduce un número"));
    }
    alert ("El resultat de la multiplicació es: "+res);
}

function escriu() {
    let num = parseInt(prompt("Introduce asta el numero que quieras que cuente :("));
    for(let i = 0; i <=  num; i++){
        document.getElementById("res").innerHTML+= i;
    }
}

function divide() {
    let num = parseInt(prompt("Introduce un numero y te dire sus divisores"));
    let str = "";
    for (let i = 0; i <= num; i++){
        if(num % i == 0){
    str+= i+", ";
           
        }
    }
    alert(str);
}
function petit() {
    let num = parseInt(prompt("Introduce un numero y te dire su dividor mas petit"));
    let boo = false;
    let i = 0;
    while (boo == false){
        if(num % i == 0 && i != 1){
            alert(i);
            boo = true;
        }
        i++;
    }  
}

function tabla() {
    let num = parseInt(prompt("Introduce un numero y te mostrare su tabla"));
    let resultat = ""
    for(let i = 1; i <= 10; i++){
        let res = num * i;
        resultat+="<p>"+ num+" * "+i+ " = "+ res+"</p>";
    }
    document.getElementById("ress").innerHTML+= resultat;

}

function tablas() {
    let num = parseInt(prompt("Introduce un numero y te mostrare su tabla"));
    let resultat = ""
    for(let j = 1; j <= num; j++){
        resultat+="<h2>Tabla del : "+j+"</h2>";
        for(let i = 1; i <= 10; i++){
            let res = j * i;
            resultat+="<p>"+ j+" * "+i+ " = "+ res+"</p>";
        }
    }
    
    document.getElementById("ress").innerHTML+= resultat;
}

function media() {
    let total = 0;
    let nota;
    let cont = -1;
    
    while (nota != -1){
        
        nota =  num();
        
        total = total + nota;
        
        cont++;

    }
    total++;
    let res = total / cont;
    alert("Tu media es: "+res);
    
}

function num() {
    let boo = false;
    while (boo == false) { 
     let num = prompt("Entra un número");
     let numInt = parseInt(num);
     if(numInt > 0 && numInt < 10){
        boo = true;
        return numInt;
     }
     else if (num == "END"){
        boo = true;
        return -1;
     }
     else{
        alert("Introduce un numero correcto");
     }

    }
}

function notaFinal() {
    let puedeSacarMasDe4 = false;
    let boo = false;
    let totalPracticas = 0;
    let contPracticas = 0;
    let totalExamenes = 0;
    let contExamenes = 0;

    alert("Introduce las notas de tus exámenes, cuando finalices escribe END");
    while (boo == false) {
        let notaExamen = num();
        if (notaExamen == -1) {
            boo = true;
        } 
        else {
            totalExamenes += notaExamen;
            contExamenes++;
        }
    }

    let mediaExamenes = totalExamenes / contExamenes;
    let pesoExamenes = mediaExamenes * 0.6;
    if (mediaExamenes < 4) {
        puedeSacarMasDe4 = true;
    }

    boo = false;

    alert("Introduce las notas de tus prácticas, cuando finalices escribe END");
    while (boo == false) {
        let notaPractica = num();
        if (notaPractica == -1) {
            boo = true;
        } else {
            totalPracticas += notaPractica;
            contPracticas++;
        }
    }

    let mediaPracticas = totalPracticas / contPracticas;
    let pesoPracticas = mediaPracticas * 0.4;
    if (mediaPracticas < 4) {
        puedeSacarMasDe4 = true;
    }

    alert("La media de tus exámenes es: " + mediaExamenes + " y su 60% es: " + pesoExamenes);
    alert("La media de tus prácticas es: " + mediaPracticas + " y su 40% es: " + pesoPracticas);

    let notaFinal = pesoExamenes + pesoPracticas;
    if (puedeSacarMasDe4) {
        notaFinal = Math.min(notaFinal, 4);
    }

    alert("Tu nota final del curso es: " + notaFinal);
}




