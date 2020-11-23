const fs = require('fs'); // acces fichier avec fs
const cors = require('cors'); // on autorise les requetes quel que soit le domaine d'origine
const express = require('express');
const app = express();
const port = 4000;

app.use(cors());


app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});


app.get('/api/user', (req, res) => {
  const idFinal = req.query.user;
  verification(idFinal, res);

});
app.get('/api/construction', (req, res) => {
  const idTroupe = req.query.type;
  const nb = req.query.nombre;
  const tache = creationTroupe(idTroupe, nb);
  res.send(tache);
});


const verification = (idFinal, res) => {
  fs.access(`${idFinal}.save`, fs.constants.R_OK, (err) => {
    if (err) {
      console.log(err);
      if (res) {
        res.send('not exist');
      }
      fs.writeFile(`${idFinal}.save`, `${Date.now()}`, (err) => {
        console.log("toto");
      });
    }
    else {
      res && res.send("found")
    }
  });
}

const oui = {
  troupe: {
    archers: 10,
    assassins: 30,
    valkyries: 60,
    pyros: 600,
    vikings: 1800
  }
};
const creationTroupe = (idTroupe, nombre) => {

  const duree = nombre * oui.troupe[idTroupe];
  return {
    nombre: nombre,
    duree
  }
  /*i = i + 5;
  button1.disabled = true;
  setTimeout(() => {
    button1.disabled = false;
    archer.innerHTML = i;
  }, 10000)
  res.send(5)
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
}*/
}

