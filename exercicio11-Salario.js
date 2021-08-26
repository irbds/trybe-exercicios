// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let Salario = 0;
let INSS = 0;
let SalarioLiquido = 0;

if(Salario>0){

// Calculo INSS
if(true){
	if(Salario<=1556.94){
		INSS = Salario*0.8;
	}else if(Salario<=2594.92){
		INSS = Salario*0.9;
	}else if(Salario<=5189.82){
		INSS = Salario*0.11;
	}else{
		INSS = 570.88
	}
}

//Calculo IR
if(true) {
	if((Salario-INSS)<=1903.98){
		IR = 0;
	}else if((Salario-INSS)<=2826.65){
		IR = ((Salario-INSS)*0.075)-142.80;
	}else if((Salario-INSS)<=3751.05){
		IR = ((Salario-INSS)*0.15)-354.80;
	}else if((Salario-INSS)<=4664.68){
		IR = ((Salario-INSS)*0.225)-636.13;
	}else{
		IR = (Salario*0.275)-869.36;
	}
}

//Calculo Salario Liquido
SalarioLiquido = Salario - INSS - IR;
console.log(SalarioLiquido);

}else{
	console.log("voce nao possui salario");
}