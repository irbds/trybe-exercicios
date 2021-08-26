// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let a = 2;
let b = 2;
let c = 8;

if(a%2==1 || b%2==1 || c%2==1) {
	console.log("existe um numero impar");
}else {
  console.log("todos os numeros sao par");
}