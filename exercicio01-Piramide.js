let n = 5;
let Base = [];

//// ------------------------------parte 1-----------------------------------
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
// //piramide a esquerda
// for(let index = 0; index<n; index += 1 ){
//   Base.push("*");
//   console.log(Base.join(""));
// }
// //-------------------------------------------------------------------------

//------------------------------parte 3-----------------------------------
for(let linha = 0; linha<n; linha += 1){
  for(let coluna = 0; coluna<n; coluna += 1 ){
    if(coluna+1 >= n-linha){
      // console.log(linha,coluna);
      Base.push("*");
    }else{
      Base.push(" ");
    }
  }
  console.log(Base.join(""));
  Base = [];
}
//-------------------------------------------------------------------------