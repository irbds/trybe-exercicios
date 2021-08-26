// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let MaiorValor = 0

for(let index = 0; index<numbers.length; index +=1){
  for(let CompararArray = 0; CompararArray<numbers.length; CompararArray +=1){
    if(numbers[index] > numbers[CompararArray]){
      if(numbers[index]>MaiorValor){
        MaiorValor = numbers[index];
      }
    }
  }
}
console.log(MaiorValor);