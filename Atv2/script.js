var tempoEscolhido = document.getElementById('tempo').value;

function iniciaTempo(duracao, display){   
  
  var timer = duracao, tempoEscolhido;
  
  setInterval(function() {
    tempoEscolhido = parseInt(timer % 60, 10);
    tempoEscolhido = tempoEscolhido < 10 ? "0" + tempoEscolhido : tempoEscolhido;
    display.textContent = tempoEscolhido;
    
    if(--timer < 0){
      timer = tempoEscolhido;
    }
    
  }, 1000); 
       
}

window.onload = function(){
  var duracao  = 60 * 4;
  var display = document.querySelector("#timer"); 
  iniciaTempo(duracao, display);
}

/*
var number = prompt("Digite o número de segundos para a contagem regressiva");
function countDown() {
  var result = number -1 >= 0 ? number-- : "FIM";
  document.getElementById("tempoDescrescente").time.innerHTML = result; // innerText é uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes.
   //Executa um bloco específico uma vez depois de um determinado tempo.
}
setTimeout("countDown();", 1000);
*/