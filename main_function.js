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