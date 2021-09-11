function verTempo(){
    var tempo = new Date();
    var hora = tempo.getHours();
    var minuto = tempo.getMinutes();
    var segundo = tempo.getSeconds();
    
    if(hora < 10) hora = "0"+hora;
    if(minuto <10) minuto = "0"+minuto;
    if(segundo < 10) segundo = "0"+segundo;
    var tempoRecebe = hora+":"+minuto+":"+segundo;

    document.getElementById("tempoHTML").innerHTML=tempoRecebe;
    
}

setInterval(verTempo, 1000);

