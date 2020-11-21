const button1 = document.getElementById("archers");
const archer = document.getElementById("archer1");
let i = 0;

const button2 = document.getElementById("assassins");
const assassin = document.getElementById("assassin1");
let j = 0;

const button3 = document.getElementById("valkyries");
const valkyrie = document.getElementById("valkyrie1");
let r = 0;

const button4 = document.getElementById("pyros");
const pyro = document.getElementById("pyro1");
let s = 0;

const button5 = document.getElementById("vikings");
const viking = document.getElementById("viking1");
let q = 0;


const creationTroupe = (event) => {
  switch (event.target.id) {
    case "archers":

      i = i + 5;
      button1.disabled = true;
      setTimeout(() => {
        button1.disabled = false;
        archer.innerHTML = i;
      }, 10000)
      break;

    case "assassins":
      j = j + 3;
      button2.disabled = true;
      setTimeout(() => {
        button2.disabled = false;
        assassin.innerHTML = j;
      }, 30000)

      break;

    case "valkyries":
      r = r + 2;
      button3.disabled = true;
      setTimeout(() => {
        button3.disabled = false;
        valkyrie.innerHTML = r;
      }, 60000)

      break;

    case "pyros":
      s = s + 1;
      button4.disabled = true;
      setTimeout(() => {
        button4.disabled = false;
        pyro.innerHTML = s;
      }, 600000)
      break;

    case "vikings":
      q = q + 1;
      button5.disabled = true;
      setTimeout(() => {
        button5.disabled = false;
        viking.innerHTML = q;
      }, 1800000)
      break
  }
}


button1.addEventListener('click', creationTroupe);
button2.addEventListener('click', creationTroupe);
button3.addEventListener('click', creationTroupe);
button4.addEventListener('click', creationTroupe);
button5.addEventListener('click', creationTroupe);