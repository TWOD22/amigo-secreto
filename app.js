let listaDeAmigos = [];
let amigoSecreto = "";

//Asigna texto (elemento HTML, Texto a)
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
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

function limpiarCaja(valor){
    document.querySelector(valor).value = "";
}