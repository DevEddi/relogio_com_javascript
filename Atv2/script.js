function enviaTempo(){
    var tempoRecebido = document.getElementById("inputTempo").value;
    for(let i = 0; i < tempoRecebido; i--){
            tempoRecebido = "0"-tempoRecebido;
            var tempoDescrescente = "Resultado"+tempoRecebido;
            document.getElementById("tempoDescrescente").innerHTML= tempoDescrescente;
    }
}
setInterval(verTempo, 1000);