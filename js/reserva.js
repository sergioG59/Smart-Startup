const formButton = document.querySelector("#form-submit");
const form = document.querySelector("#formulario");
const formTest = document.forms["formulario"];
formButton.addEventListener("click", onSubmit);
// destino-select
// llegada-select
// deparure
// return
// round
// oneway

function onSubmit(event) {
    event.preventDefault();
    console.log("funcionaaaA");
    console.log("Form", formTest);
}