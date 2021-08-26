// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let CustoProduto = 5;
let ProdutoImposto = CustoProduto*0.2;
let ValorVenda = 10;
let ValorCustoTotal = CustoProduto + ProdutoImposto;

if(CustoProduto>=0 && ValorVenda>=0){
	let lucro = ValorVenda - ValorCustoTotal;
	console.log(lucro);
}else{
	console.log("insira valores maiores ou iguais a zero");
}