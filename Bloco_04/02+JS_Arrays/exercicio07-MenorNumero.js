// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let MaiorValor = 0

//descobre o maior valor da array
if(true){
for(let index = 0; index<numbers.length; index +=1){
  for(let CompararArray = 0; CompararArray<numbers.length; CompararArray +=1){
    if(numbers[index] > numbers[CompararArray]){
      if(numbers[index]>MaiorValor){
        MaiorValor = numbers[index];
      }
    }
  }
}
}

//usa o maior valor como parametro para encontrar o menor valor
let MenorValor = MaiorValor;

for(let index = 0; index<numbers.length; index +=1){
  for(let CompararArray = 0; CompararArray<numbers.length; CompararArray +=1){
    if(numbers[index] < numbers[CompararArray]){
      if(numbers[index]<MenorValor){
        MenorValor = numbers[index];
      }
    }
  }
}
console.log(MenorValor);