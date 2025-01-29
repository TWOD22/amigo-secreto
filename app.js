let listaDeAmigos = [];

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function ingresarNombre (){
    let nombreSorteo = document.getElementById("nombre")
    if (nombreSorteo == ""){
        asignarTextoElemento ("h2","No Puedes Añadir Un Espacio En Blanco")
    } else{
        listaDeAmigos.push(nombreSorteo);
    }
}

ingresarNombre();
console.log(listaDeAmigos);