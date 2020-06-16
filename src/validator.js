const validator = {
  maskify,
  isValid
};

export default validator;
function maskify(creditCardNumber){
  creditCardNumber.value;
  //console.log(number)
  if(creditCardNumber.value>4){
    var cutNumber = number.substr(0,number.length-4);
    var changeString = cutNumber.replace(/[a-z0-9]/g, '#');
    var lastNumber = number.substr(-4);
    var fullNumber = changeString.concat(lastNumber);
    document.getElementById("numberCreditCard-mask").innerHTML = fullNumber;
  }
  else{
    document.getElementById("numberCreditCard-mask").innerHTML = creditCardNumber.value;
  }

}
//funcion validar
let array = [];
function isValid(creditCardNumber){
  
  //convertir a array
  let newArray = Array.from(creditCardNumber.value);
  //console.log(newArray);
  //Invertir Array
  let reverseArray = newArray.reverse();
  //console.log(reverseArray);
  //recorre el array y busca los números en posición par
  reverseArray.forEach((item, i) => {
    if ( item, i % 2 !== 0) {
      item = parseInt(item * 2);
      //console.log(item);
      if (item > 9) {
        item = addDigits(item);
        //console.log(item);
      }
    }
    let array.push( parseInt(item));
    // Suma los numbers mayores que 10
  });
  checkAlgorithm(array);
  console.log(checkAlgorithm(array));
}

// Suma los numbers mayores que 10
function addDigits(item){
  let numstring = item.toString();
  //console.log (numstring);
  let a = parseInt(numstring.charAt(0));
  let b = parseInt(numstring.charAt(1));
  item = a + b;
  //console.log(a+b);
  return item;}

  function checkAlgorithm(array) {
    let total = array.reduce((a, b) => a + b, 0);
    //console.log(total);
    if (total % 10 === 0) {
      //console.log(total);
      pass();
      return true;


    } else {
      //console.log(total);
      document.getElementById("false").innerHTML = '*Su tarjeta no es válida';
      var btn1 = document.getElementById("back");
      var btn2 = document.getElementById("valid");
      btn1.style.display = 'block';
      btn2.style.display = 'none';


      return false;

      //console.log(total);
    }
  };
  