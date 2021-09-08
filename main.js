let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//parte 1
console.log('');
console.log('bem vinda, ' + info['personagem']);

//parte 2 - inserir novo objeto e imprimi-lo
console.log('');
info['recorrente'] = 'Sim';
console.log(info);

//parte 3 - Faça um for/in que mostre todas as chaves do objeto. 
console.log('');
for(let chaves in info) {
  console.log(chaves);
}

//parte 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
console.log('');
for(let chavesValor in info) {
  console.log(info[chavesValor]);
<<<<<<< HEAD
}

//parte 5 -Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
console.log('');
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for(let valour in info) {
  if(valour === 'recorrente' && info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim') {
    console.log('Ambos recorrentes');
  }else {
    console.log(info[valour] + ' e ' + info2[valour]);
  }
}
=======
}
>>>>>>> 95bc2f5... finalizado quinta parte do exercicio do dia
