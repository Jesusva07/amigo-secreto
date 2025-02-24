// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoAgregado = "";
console.log(amigoAgregado);

function agregarAmigo() {
    let amigoAgregado = document.getElementById("amigo").value;
    if (amigoAgregado) {
        amigos.push(amigoAgregado);
        console.log(`Amigo agregado: ${amigoAgregado}`);
        document.getElementById("amigo").value = "";
    } else {
        alert("No se ha ingresado ningún nombre.");
        console.log("No se ha ingresado ningún nombre.");
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}