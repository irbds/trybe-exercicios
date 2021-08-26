// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [3, 2, 2, 12, 70, 8, 100, 2, 32, 22];
let Imparnumber = 0;

for(let index = 0; index<numbers.length; index += 1){
  if(numbers[index]%2 == 1){
    console.log(numbers[index]);
    Imparnumber += 1;
  }
}

if(Imparnumber == 0){
  console.log("nenhum numero primo encontrado");
}