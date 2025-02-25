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
        actualizarListaAmigos();
    } else {
        alert("No se ha ingresado ningún nombre.");
        console.log("No se ha ingresado ningún nombre.");
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}