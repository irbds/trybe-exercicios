// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Rainha";

switch(peca.toLowerCase()) {
  case "peao" :
    console.log("uma casa para frente");
  break;

  case "torre" :
    console.log("horizontal e vertical");
  break;

  case "cavalo" :
    console.log("duas casas para horizontal e uma para vertical ou duas para horizontal e uma para vertical");
  break;

  case "bispo" :
    console.log("diagonais");
  break;

  case "rei" :
    console.log("uma casa para horizontal, vertical ou diagonal");
  break;

  case "rainha" :
    console.log("horizontal, vertical ou diagonal");
  break;
}