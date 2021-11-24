const formButton = document.querySelector("#form-submit");
const form = document.querySelector("#formulario");
const destino = document.querySelector("#destino-select");
const llegada = document.querySelector("#llegada-select");
const departure = document.querySelector("#deparure");
const return_ = document.querySelector("#return");
const round = document.querySelector("#round");
const oneway = document.querySelector("#oneway");

formButton.addEventListener("click", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log("funcionaaaA");
    console.log("Form", form);
    console.log("destino", destino);
    console.log("llegada", llegada);
    console.log("departure", departure);
    console.log("return_", return_);
    console.log("round", round);
    console.log("oneway", oneway.target);
}