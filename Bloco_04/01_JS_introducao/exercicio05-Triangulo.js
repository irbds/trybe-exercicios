// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let a = 60;
let b = 60;
let c = 60;

if(a>0 && b>0 && c>0){
    if(a+b+c == 180){
        console.log("os angulos formam um triangulo");
    }else{
        console.log("Os angulos nao formam um triangulo");
    }
}else{
    console.log("angulos negativos ou nulos não sao permitidos");
}