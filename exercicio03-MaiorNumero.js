//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a = 4;
let b = 6;
let c = 4;

if(a>=b && a>=c){
    console.log("o maior numero é "+a);
}else if(b>=a && b>=c){
    console.log("o maior numero é "+b);
}else if(c>=a && c>=b){
    console.log("o maior numero é "+c);
}