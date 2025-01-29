let listaDeAmigos = [];

//Asigna texto (elemento HTML, Texto a)
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function ingresarNombre (){
    let nombreSorteo = document.getElementById("amigo").value;
    console.log(listaDeAmigos);
    if (nombreSorteo == ""){
        asignarTextoElemento ("h2","No Puedes Añadir Un Espacio En Blanco<br>Ingrese un nuevo nombre.")
    } else{
        listaDeAmigos.push(nombreSorteo);
        asignarTextoElemento("h2", "Nombre añadido correctamente.<br>Ingrese un nuevo nombre." );
    }
}

function visualizarLista (){
    let listaHTML = document.querySelector("ul");
    listaHTML.innerHTML = "";
    for ( i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
    }
}
