
var tempoEscolhido = document.getElementById("timeForm").submit();
function recebeTempo(){    
    resultado = tempoEscolhido - 1 >= 0 ? tempoEscolhido-- : "FIM";
    document.getElementById("tempoDescrescente").time.innerText = resultado;    
    setTimeout("recebeTempo();", 1000);
}

/*
var number = prompt("Digite o número de segundos para a contagem regressiva");
function countDown() {
  result = number - 1 >= 0 ? number-- : "FIM";
  document.getElementById("tempoDescrescente").time.innerText = result; // innerText é uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes.
  setTimeout("countDown();", 1000); //Executa um bloco específico uma vez depois de um determinado tempo.
}
*/