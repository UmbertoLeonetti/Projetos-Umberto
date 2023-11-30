//primeiro exercício
const nome = 'Umberto';
const sobrenome = 'Leonetti';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoatual = 2019;
let anoNascimento = anoatual - idade;

console.log(nome, sobrenome + " tem " + idade + " anos, pesa " + peso + " kg");
console.log("tem " + altura + " de altura e seu IMC é de " + imc);
console.log(nome + " " + sobrenome + " nasceu em " + anoNascimento);