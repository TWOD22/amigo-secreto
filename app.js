let listaDeAmigos = [];
let amigoSecreto = "";

//Asigna texto (elemento HTML, Texto a)
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(valor){
    document.querySelector(valor).value = "";
}

function ingresarNombre (){
    let nombreSorteo = document.getElementById("amigo").value;
    nombreSorteo = nombreSorteo.toUpperCase(nombreSorteo);
    if (nombreSorteo == ""){
        asignarTextoElemento ("h2","No Puedes Añadir Un Espacio En Blanco<br>Ingrese un nuevo nombre.")
    } else{
        listaDeAmigos.push(nombreSorteo);
        console.log(listaDeAmigos);
        asignarTextoElemento("h2", "Nombre añadido correctamente.<br>Ingrese un nuevo nombre." );
        visualizarLista();
        limpiarCaja("#amigo");
    }
}

function visualizarLista (){
    let listaHTML = document.querySelector("ul");
    listaHTML.innerHTML = "";
    for ( i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

function sorteoLista (){
    if (listaDeAmigos.length==0){
        asignarTextoElemento("h2","No se puede hacer el sorteo <br> Ingrese un nombre.")
    }else{
        let numeroAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        amigoSecreto = listaDeAmigos[numeroAleatorio];
        asignarTextoElemento("h2",`Tu amigo secreto es: ${amigoSecreto}`);
    }
}

