let data = new Date();

hora = data.getHours();
function showTime(){
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let relogio = h + ":" + m + ":" + s;
  document.querySelector('.horario').innerHTML = relogio;
}

var target_date = new Date(2021,11,1).getTime();

var dias, horas, minutos, segundos;

var regressiva = document.getElementById("regressiva");
setInterval(function () {
  var current_date = new Date().getTime();
  var segundos_f = (target_date - current_date) / 1000;
  dias = parseInt(segundos_f / 86400);
  segundos_f = segundos_f % 86400;
  
  horas = parseInt(segundos_f / 3600);
  segundos_f = segundos_f % 3600;
  
  minutos = parseInt(segundos_f / 60);
  segundos = parseInt(segundos_f % 60);
  document.getElementById('dia').innerHTML = dias;
  document.getElementById('hora').innerHTML = horas;
  document.getElementById('minuto').innerHTML = minutos;
  document.getElementById('segundo').innerHTML = segundos;

}, 1000);


  function cumprimento (saudacao){
    
    var teste = document.getElementsByTagName("h1")[1].innerHTML = saudacao;
    
  }

  if (hora < 12 && hora >= 0) {
    cumprimento("bom dia!");
    
  }
  else if (hora >= 12 && hora < 18) {
    cumprimento("boa tarde!");
  }
  else if (hora >= 18 && hora < 24) {
    cumprimento("boa noite!");
  }
  let timer = setInterval(showTime, 1000);
  let timer2 = setInterval(contFerias, 1000);






