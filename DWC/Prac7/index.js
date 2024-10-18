let listaPacientes = ["izan;gual", "eduardo;giurca", "lucas;bustabad"]
listaEspera();


function arrivada(){
    let nomArrivada = document.getElementById("nombre").value;
    let apellidoArivada  = document.getElementById("apellido").value;
    let nuevopaciente = nomArrivada+";"+apellidoArivada;
    let checkBox = document.getElementById("checkbox");
 
    nuevopaciente.toLocaleLowerCase;
    if(checkBox.checked){
        listaPacientes.unshift(nuevopaciente);

    }else {
        listaPacientes.push(nuevopaciente);

    }
    listaEspera();
    
    

    console.log(nomArrivada);
}

function listaEspera()  {
    let cont = document.getElementById("listaEspera");
    let str = "";
    for(let i = 0; i < listaPacientes.length; i++) {
        
        let nom = listaPacientes[i].split(";")[0];
        let ap = listaPacientes[i].split(";")[1];
        str+= "<li>"+nom+ " "+ap+"</li>"
    }

    str = "<ol>"+str+"</ol>";
    cont.innerHTML = str;
}

function sig () {
    let siguiente = document.getElementById("siguiente");
    
    let nom = listaPacientes[0].split(";")[0];
    let ap = listaPacientes[0].split(";")[1];
    let nomComplet = nom + " " + ap;
    siguiente.innerHTML = nomComplet;

    listaPacientes.shift();

    listaEspera();
}

function consultar() {
    let nomC = document.getElementById("nombreC").value;
    let apC = document.getElementById("apellidoC").value;
    let paciente = nomC+";"+apC;

   
    listaPacientes.forEach(function(numero, indice) {
        if(numero == paciente) {
            let i = parseInt(indice)+1;
            alert("El pacient "+nomC +" "+ apC+" Esta en la pocició: "+ i);
        }
       
      });
}
