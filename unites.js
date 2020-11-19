let button1 = document.getElementById("archers");
let archer = document.getElementById("archer1");
let i = 5;

button1.addEventListener('click',troupes1)

function troupes1(event) {
    
    archer.innerHTML = i;
    i = i + 5;
    button1.disabled = true;
    setTimeout(() => {
        button1.disabled = false;

      }, 10000)

}

let button2 = document.getElementById("assassins");
let assassin = document.getElementById("assassin1");
let j = 3;

button2.addEventListener('click',troupes2)

function troupes2(event) {
    
    assassin.innerHTML = j;
    j = j + 3;
    button2.disabled = true;
    setTimeout(() => {
        button2.disabled = false;

      }, 30000)

}

let button3 = document.getElementById("valkyries");
let valkyrie = document.getElementById("valkyrie1");
let r = 2;

button3.addEventListener('click',troupes3)

function troupes3(event) {
    
    valkyrie.innerHTML = r;
    r = r + 2;
    button3.disabled = true;
    setTimeout(() => {
        button3.disabled = false;

      }, 60000)

}

let button4 = document.getElementById("pyros");
let pyro = document.getElementById("pyro1");
let s = 1;

button4.addEventListener('click',troupes4)

function troupes4(event) {
    
    pyro.innerHTML = s;
    s = s + 1;
    button4.disabled = true;
    setTimeout(() => {
        button4.disabled = false;

      }, 600000)

}

let button5 = document.getElementById("vikings");
let viking = document.getElementById("viking1");
let q = 1;

button5.addEventListener('click',troupes5)

function troupes5(event) {
    
    viking.innerHTML = q;
    q = q + 1;
    button5.disabled = true;
    setTimeout(() => {
        button5.disabled = false;

      }, 1800000)

}