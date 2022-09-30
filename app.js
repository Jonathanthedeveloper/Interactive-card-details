"strict";

// Display Card Contents
const cardNameDisplay = document.querySelector(".card-name");
const cardNumberDisplay = document.querySelector(".card-number");
const cardExpDisplayMonth = document.querySelector(".card-exp-d");
const cardExpDisplayYear = document.querySelector(".card-exp-year");
const cvcDisp = document.querySelector(".cvc-no");

// documents
const payment = document.querySelector(".form-contain");
const sucess = document.querySelector(".sucess-message");

const button = document.querySelector("button");

// Inputs
const inputName = document.querySelector(".inputname");
const inputCardNum = document.querySelector(".inputcardnum");
const inputMonth = document.querySelector(".inputmonth");
const inputYear = document.querySelector(".inputyear");
const inputCvc = document.querySelector(".input-cvc");


  // ARRAYS

  //save all input fields in an array
  const inputFields = [inputName, inputCardNum, inputMonth, inputYear, inputCvc];
  let truthVal;




// FUNCTIONS

// Checks is all inputs are filled
function isInputFilled() {
  let filled = true;
  for (let i = 0; i < inputFields.length; i++) {
    const errorMssg = document.querySelector(`.error--${i}`);
    if (inputFields[i].value === "") {
      errorMssg.classList.remove("hidden");
      filled = false;
    }
  }
  return filled;
}

// checks if argument contains only string
function isLetters(str) {
    let tv = true;
    for (let i = 0; i < str.length; i++) {
      let test = Number(str.slice(i, i + 1));
      if (!isNaN(test)) {
        tv = false;
      }
      if (test == " ") {
        tv = true;
      }
    }
    return tv;
  }
  
  // checks if argument is a number
  function isNum(num) {
    let tv = false;
    if (num % 1 === 0) {
      tv = true;
    }
    return tv;
  }

  function validate() {
    const [a, b, c, d, e] = [...inputFields];
  
    let a1 = isLetters(a.value);
    let b1 = isNum(b.value);
    let c1 = isNum(c.value);
    let d1 = isNum(d.value);
    let e1 = isNum(e.value);
    truthVal.push(a1, b1, c1, d1, e1);
    return a1 && b1 && c1 && d1 && e1;
  }




//Adding Event listeners

inputName.addEventListener("keyup", function () {
  cardNameDisplay.textContent = inputName.value;
});

inputCardNum.addEventListener("keyup", function () {
  cardNumberDisplay.textContent = inputCardNum.value;
});

inputMonth.addEventListener("keyup", function () {
  cardExpDisplayMonth.textContent = inputMonth.value;
});

inputYear.addEventListener("keyup", function () {
  cardExpDisplayYear.textContent = inputYear.value;
});

inputCvc.addEventListener("keyup", function () {
  cvcDisp.textContent = inputCvc.value;
});

button.addEventListener("click", function () {
  let val, isfilled;
  truthVal = [];
  isfilled = isInputFilled();
  val = validate();

  if (val && isfilled) {
    payment.classList.add("hide-content");
    sucess.classList.remove("hide-content");
  } else {
    for (let i = 0; i < truthVal.length; i++) {
      const errorsign = document.querySelector(`.error--${i}`);
      if (!truthVal[i]) {
        errorsign.classList.remove("hidden");
      }
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    isInputFilled();
  }
});

