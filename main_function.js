//parte 1 -Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function isPali (frase) {
  let ilapSi = [];
  let result = 'a palavra é um Palindromo';
  for (let index = frase.length-1, xedni = 0; index >= 0; index -= 1, xedni += 1) {
    ilapSi[xedni] = frase[index];
    if (ilapSi[xedni] != frase[xedni]){
      index = 0;
      result = 'a palavra nao é um Palindromo';
    }
  }
  return result;
}
console.log(isPali ('arara'));

//parte 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
console.log('');
function maiorValor (valores) {
  let indice = valores[0];
  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] > indice) {
      indice = index;
    }
  }
  console.log(indice);
}

maiorValor([-2, -3, -6, -7, -10, -1]);

