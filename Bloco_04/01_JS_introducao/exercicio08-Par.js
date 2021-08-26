// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let a = 3;
let b = 5;
let c = 3;

if(a%2==0 || b%2==0 || c%2==0) {
  console.log("existe um numero par");
}else {
  console.log("todos os numeros sao impar");
}