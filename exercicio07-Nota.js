// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let a = 120;

if(a>=0 && a<=100) {
  if(a>=90){
    console.log("A");
  }else 
    if(a>=80){
      console.log("B");
    }else
      if(a>=70){
        console.log("C");
      }else
        if(a>=60){
          console.log("D");
        }else
          if(a>=50){
            console.log("E");
          }else
            if(a<50){
              console.log("F");
            }
}else {
  console.log("error -- nota > 100 ou < 0");
}