import validator from "./validator.js";
//console.log(validator);

//Numero de tarjeta de credito del usuario
let creditCardNumber = document.getElementById("numberCreditCard");

//Eventos del formulario
const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  verifiedSubmit();
});

//Evento del boton donar
const donateButton = document.getElementsByClassName("donate-btn");

for (var i = 0; i < donateButton.length; i++) {
  donateButton[i].addEventListener("click", show);
}

//Funcion donde se llama IsValid/Maskify
function verifiedSubmit() {
  var valid = validator.isValid(creditCardNumber.value);
  if (valid) {
    pass();
    var maskNumberValid = validator.maskify(creditCardNumber.value);
    document.getElementById(
      "creditCardNumberId-mask"
    ).innerHTML = maskNumberValid;
  } else {
    document.getElementById("false").innerHTML = "*Su tarjeta no es válida";
    hideBtn();
  }
}

//Mostrar y ocultar div
function show() {
  var div1 = document.getElementById("aboutUs");
  var div2 = document.getElementById("select-donate");
  var div3 = document.getElementById("donation-Form");
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
}

//Mostrar mensaje si la tarjeta es valida
function pass() {
  var div1 = document.getElementById("form-box");
  var div2 = document.getElementById("pass");
  div1.style.display = "none";
  div2.style.display = "block";
}
//Mostrar y ocultar botones
function hideBtn() {
  var btn1 = document.getElementById("back");
  var btn2 = document.getElementById("valid");
  btn1.style.display = "block";
  btn2.style.display = "none";
}
