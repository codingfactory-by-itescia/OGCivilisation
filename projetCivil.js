let ble = document.getElementById("ble")
ble.value -= 10;
let or = document.getElementById("or")
or.value -= 40;
let troupe = document.getElementById("troupe")
troupe.value -= 30;

function progressBarSim(al) {
    var bar = document.getElementById('barble');
    var status = document.getElementById('status');
    status.innerHTML = al+"%";
    bar.value = al;
    al++;
      var sim = setTimeout("progressBarSim("+al+")",300);
      if(al == 100){
        status.innerHTML = "100%";
        bar.value = 100;
        clearTimeout(sim);
        var finalMessage = document.getElementById('finalMessage');
        finalMessage.innerHTML = "Process is complete";
      }
  }
  var amountLoaded = 0;
  progressBarSim(amountLoaded);