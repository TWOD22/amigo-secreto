let listaDeAmigos = [];


function ingresarNombre (){
    let nombreSorteo = prompt("Ingrese el nombre de su amigo");
    listaDeAmigos.push(nombreSorteo);
}

ingresarNombre();
console.log(listaDeAmigos);