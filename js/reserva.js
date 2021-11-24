const formButton = document.querySelector("#form-submit");
const form = document.querySelector("#formulario");
const f = document.forms["formulario"];
const info = "f.elements: " + f.elements + "\n"
         + "f.length: " + f.length + "\n"
         + "f.name: " + f.elements + "\n"
         + "f.acceptCharset: " + f.acceptCharset + "\n"
         + "f.action: " + f.action + "\n"
         + "f.enctype: " + f.enctype + "\n"
         + "f.encoding: " + f.encoding + "\n"
         + "f.method: " + f.method + "\n"
         + "f.target: " + f.target;
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
    console.log("Form", f);
}