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