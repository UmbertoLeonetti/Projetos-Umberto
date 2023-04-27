function soma(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado  = Number(num1) + Number(num2);
    document.getElementById("resultado").innerHTML = "A soma é " + resultado;
}
function compara(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if(num1 > num2){
        document.getElementById("maior").innerHTML = "Primeiro número é maior";
        document.getElementById("maior").className = "vermelho";
    } else if (num2 > num1){
        document.getElementById("maior").innerHTML = "Segundo número é maior";
        document.getElementById("maior").className = "verde";
    } else if(num1 == num2){
        document.getElementById("maior").innerHTML = "Ambos números são iguais";
        document.getElementById("maior").className = "amarelo";
    }
}