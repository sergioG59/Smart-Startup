const formButton = document.querySelector("#form-submit");
const form = document.querySelector("#formulario");
formButton.addEventListener("click", form);

function form(event) {
    event.preventDefault();
    console.log("funcionaaaA");
    console.log("Form", form);
}