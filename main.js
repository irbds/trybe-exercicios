let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//parte 1
console.log('bem vinda, ' + info['personagem']);

//parte 2 - inserir novo objeto e imprimi-lo
info['recorrente'] = 'Sim';
console.log(info);