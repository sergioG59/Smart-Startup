const formButton = document.querySelector("#form-submit");
const form = document.querySelector("#formulario");
formButton.addEventListener("click", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log("funcionaaaA");
    console.log("Form", form);
}