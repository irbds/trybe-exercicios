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
}