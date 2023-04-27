function mostrarTexto(){
    let conteudo = document.getElementById("texto").value;
    document.getElementById("conteudo").innerHTML = conteudo;
}
function mostrarTamanho(){
    let tamanho = document.getElementById("texto").value.length;
    document.getElementById("tamanho").innerHTML = "O tamanho atual do campo é de: " + tamanho;
}