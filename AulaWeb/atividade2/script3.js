function mostrarAlerta() {
    alert("Olá, mundo!");
}
function mostrarComida(comida) {
    alert(comida);
}
function mostrarCelula(celula) {
    alert(celula.innerHTML);
}
function verificarParImpar() {
    let numero = document.getElementById("numero").value;
    if (numero % 2 == 0) {
        alert("O número é par");
    } else {
        alert("O número é ímpar");
    }
}