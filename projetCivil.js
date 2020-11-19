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
    menu : "Ici travaillent les agriculteurs, ils récoltent le blé et nourissent les animaux"
}
let cave={
    fond : "Image/cave.jpg",
    menu : "Ici la mine, nos mineurs travaillent jours et nuits afin de collecter de l'or"
}
let army={
    fond : "Image/Caserne.jpg",
    menu : "Ici sont entraînés nos valeureux soldats par Le Grand The Rock afin de partir aux combat et gagner nos batailles"
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

let ui=document.getElementById("i");
let text=document.getElementById("nop");
ui.addEventListener("click", oi);

function oi(event){
    //console.log(event.target.id);
    fetch("http://localhost:4000/test", {mode: 'no-cors'})
    .then((Response)=>{
        console.log(Response.body);
    });
}
