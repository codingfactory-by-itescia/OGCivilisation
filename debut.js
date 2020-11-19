const id = document.getElementById("test");
const boutonn = document.getElementById("boutonn");
const idFinal = document.getElementById("idFinal");


const onButtonClick = (event) => {
    changement();
    recuperationId();
}

function changement() {
    const change = document.getElementById("test").value;
    idFinal.textContent = change;

    return idFinal.textContent;
}

const buildUrl = (idFinal) => {
    const url = `http://localhost:4000/api/user?user=${idFinal}`;
    return url;
}


function recuperationId(event) {
    //console.log(event.target.id);
    fetch(buildUrl(idFinal.textContent))
        .then(r => r.text())
        .then((Response) => {
            console.log(Response);
        });
}
boutonn.addEventListener("click", onButtonClick)
