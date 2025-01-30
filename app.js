let listaDeAmigos = [];
let amigoSecreto = "";

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
        asignarTextoElemento ("h2","NO PUEDES DEJAR ESPACIO EN BLANCO<br>INGRESA UN NOMBRE");
    } else if (/\d/.test(nombreSorteo)){
            asignarTextoElemento ("h2","NO PUEDES ESCRIBIR NUMEROS<br>INGRESA UN NOMBRE");
            limpiarCaja("#amigo");
    } else {
        listaDeAmigos.push(nombreSorteo);
        asignarTextoElemento("h2", "NOMBRE AGREGADO A LA LISTA.<br>INGRESA UN NUEVO NOMBRE");
        visualizarLista();
        limpiarCaja("#amigo");
    }
    return;
}

function visualizarLista (){
    let listaHTML = document.querySelector("ul");
    listaHTML.innerHTML = "";
    for ( let i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
    return;
}

function sorteoLista (){
    if (listaDeAmigos.length===0){
        asignarTextoElemento("h2","NO SE PUEDE REALIZAR EL SORTEO <br> DEBES INGRESAR UN NOMBRE");
    }else{
        let numeroAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        amigoSecreto = listaDeAmigos[numeroAleatorio];
        asignarTextoElemento("h2",`¡TU AMIGO SECRETO ES: ${amigoSecreto}!`);
    }
    return;
}

