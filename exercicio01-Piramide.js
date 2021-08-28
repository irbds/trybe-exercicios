//// ------------------------------parte 1-----------------------------------
// let n = 5;
// let Base = [];
// //cria a base da piramide
// for(let index = 0; index<n; index += 1 ){
//   Base.push("*");
// }

// //cria a altura da piramide
// for(let index = 0; index<n; index += 1){
// console.log(Base.join(""));
// }
//// -------------------------------------------------------------------------


// //------------------------------parte 2-----------------------------------
// let n = 5;
// let Base = [];
// //piramide a esquerda
// for(let index = 0; index<n; index += 1 ){
//   Base.push("*");
//   console.log(Base.join(""));
// }
// //-------------------------------------------------------------------------

// //------------------------------parte 3-----------------------------------
// let n = 5;
// let Base = [];
// for(let linha = 0; linha<n; linha += 1){
//   for(let coluna = 0; coluna<n; coluna += 1 ){
//     if(coluna+1 >= n-linha){
//       // console.log(linha,coluna);
//       Base.push("*");
//     }else{
//       Base.push(" ");
//     }
//   }
//   console.log(Base.join(""));
//   Base = [];
// }
// //-------------------------------------------------------------------------

//------------------------------parte 4-----------------------------------
let n = 50;
let BaseImpar = [];

for(let index = 0; index<=n; index+=1){
  if(index%2 == 1){
    BaseImpar.push(index);
  }
}

let altura = BaseImpar.length-1;
let linhaPiramide = [];

for(let linhas = 0; linhas <= altura; linhas += 1){

  //Cria espacos
  let div = (BaseImpar[(altura)-linhas])/2
  for(let espaco = 0; espaco<div; espaco++){
    linhaPiramide.push(" ");
  }

  //Cria asterisco
  for(let asterisco = 0; asterisco < BaseImpar[linhas]; asterisco += 1){
    linhaPiramide.push("*");
  }

  console.log(linhaPiramide.join(""));
  linhaPiramide=[];
}
//-------------------------------------------------------------------------