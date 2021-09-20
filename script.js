let nomeDosDados = ['name', 'email', 'cpf', 'endereco', 'cidade', 'estado', 'moradia', 'Resumo', 'cargo', 'descricao', 'inicio'];
let formAbout = document.querySelector('#test');

function creatStates() {
  let statesList = ['AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO','DF']
  let listaEstado = document.querySelector('#estado');
  
  for(let index = 0; index < statesList.length; index += 1) {
    let option = document.createElement('option');
    option.text = statesList[index];
    listaEstado.appendChild(option);
  }
}
creatStates();

function removeLastDiv(event) {
  event.preventDefault();
  document.querySelector('#dadosFinal').removeChild(document.querySelector('#dadosFinal').lastChild);
}

function clearInformation() {
  numerOfChilden = document.querySelector('#dadosFinal').children.length;
  for(let index = 0; index < numerOfChilden; index += 1){
    document.querySelector('#dadosFinal').removeChild(document.querySelector('#dadosFinal').lastChild)
  }
}

function showInformation() {
  let dadosDiv = document.querySelector('#dadosFinal');
  let div = document.createElement('div');
  div.classList.add('dadosCurriculo');
  dadosDiv.appendChild(div);
  for( let index = 0; index < nomeDosDados.length; index += 1) {
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    p1.innerText = nomeDosDados[index] + " :";
    p.innerText = formAbout[nomeDosDados[index]].value;
    dadosDiv.lastChild.appendChild(p1);
    dadosDiv.lastChild.appendChild(p);
  }
}

function checkInformation(event) {
  event.preventDefault();
  error = false;
  for(let index = 0; index < nomeDosDados.length; index += 1) {
    if(formAbout[nomeDosDados[index]].value == ''){
      error = true;
      index = nomeDosDados.length;
      alert('existem dados a serem preenchido');
    }
  }
  if(!error){
    showInformation();
  }
}

window.onload = function(){
  submitButton.addEventListener('click', checkInformation);
  resetButton.addEventListener('click', clearInformation);
  cleanLastdiv.addEventListener('click', removeLastDiv);
}