const validator = {
  maskify:(creditCardNumber) => {
    //console.log(creditCardNumber);
    if (creditCardNumber.length > 4) {
      let cutNumber = creditCardNumber.substr(0, creditCardNumber.length - 4);
      let changeString = cutNumber.replace(/[a-z0-9]/g, "#");
      let lastNumber = creditCardNumber.substr(-4);
      let fullNumber = changeString.concat(lastNumber);
      return fullNumber;
    } else {
      return creditCardNumber;
    }
  },

  isValid:(creditCardNumber) => {
    let array = [];
    //convertir a array
    let newArray = Array.from(creditCardNumber);
    //console.log(newArray);
    //Invertir Array
    let reverseArray = newArray.reverse();
    //console.log(reverseArray);
    //recorre el array y busca los números en posición par
    reverseArray.forEach((item, i) => {
      if ((item, i % 2 !== 0)) {
        item = parseInt(item * 2);
        //console.log(item);
        if (item > 9) {
          item = addDigits(item);
          //console.log(item);
        }
      }
      array.push(parseInt(item));
      // Suma los numbers mayores que 10
    });
    return checkAlgorithm(array);
    //console.log(checkAlgorithm(array));
  },
};

// Suma los numbers mayores que 10

function addDigits(item) {
  let numstring = item.toString();
  //console.log (numstring);
  let a = parseInt(numstring.charAt(0));
  let b = parseInt(numstring.charAt(1));
  item = a + b;
  //console.log(a+b);
  return item;
}

function checkAlgorithm(array) {
  let total = array.reduce((a, b) => a + b, 0);
  //console.log(total);
  if (total % 10 === 0) {
    //console.log(total);

    return true;
  } else {
    //console.log(total);
    return false;
    //console.log(total);
  }
}

export default validator;
