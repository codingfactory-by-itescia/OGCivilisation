let ble = document.getElementById("ble")
ble.value -= 10;
let or = document.getElementById("or")
or.value -= 40;
let troupe = document.getElementById("troupe")
troupe.value -= 30;

/*function progressBarSim(al) {
    let bar = document.getElementById('barble');
    let status = document.getElementById('status');
    status.innerHTML = al+"%";
    bar.value = al;
    al++;
      let sim = setTimeout("progressBarSim("+al+")",300);
      if(al == 100){
        status.innerHTML = "100%";
        bar.value = 100;
        clearTimeout(sim);
      }
  }
let amountLoaded = 0;
progressBarSim(amountLoaded);*/

//bouton du sous menu de batiments
let fond=document.getElementById("fond")
let menu=document.getElementById("menu")

let farmButton=document.getElementById("farm")
farmButton.addEventListener("click", farmMenu)
let caveButton=document.getElementById("cave")
caveButton.addEventListener("click", caveMenu)
let armyButton=document.getElementById("army")
armyButton.addEventListener("click", armyMenu)

//création des objets
let farm={
    fond: "Image/Farm.jpg",
    menu : "ici la ferme"
}
let cave={
    fond : "Image/cave.jpg",
    menu : "ici la mine d'or"
}
let army={
    fond : "Image/Caserne.jpg",
    menu : "ici la caserne"
}

//fonction pour changer l'image et le menu
function farmMenu(){
    fond.src = farm.fond
    menu.innerHTML = farm.menu
}
function caveMenu(){
    fond.src = cave.fond
    menu.innerHTML = cave.menu
}
function armyMenu(){
    fond.src = army.fond
    menu.innerHTML = army.menu
}
