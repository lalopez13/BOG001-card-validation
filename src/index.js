import validator from "./validator.js";
//console.log(validator);

let creditCardNumber = document.getElementById("numberCreditCard");


const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log("Form submission cancelled.");
});
//funcion enmascarar
function show() {
  var div1 = document.getElementById("aboutUs");
  var div2 = document.getElementById("select-donate");
  var div3 = document.getElementById("donation-Form");
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
}
function pass() {
  var div1 = document.getElementById("form-box");
  var div2 = document.getElementById("pass");
  var div3 = document.getElementById("picture-pass");
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "block";
}
validator.isValid(creditCardNumber);
validator.maskify(creditCardNumber);
