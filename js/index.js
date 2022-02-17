function getInput(input) {
  let takeInput = document.getElementById(input).value;
  let takeInputValue = parseFloat(takeInput);
  takeInput = takeInputValue;
  return takeInput;
}
//calculate button task
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    inputValidation();
    getInput("first-input");
    //calling total expenses
    totalExpensesSum();
    //calling for displaying total cost
    showTheOutputOfExpenses();
    //calling for showing primary remaining balance
    showTheOutputOfRemainingBalance();
  });
// input validation
function inputValidation() {
  if (
    getInput("first-input") > 0 &&
    getInput("second-input") > 0 &&
    getInput("third-input") > 0 &&
    getInput("fourth-input") > 0
  ) {
    return (
      getInput("first-input"),
      getInput("second-input"),
      getInput("third-input"),
      getInput("fourth-input")
    );
  } else {
    alert("plz enter any number larger than zero");
  }
}
// sum of expensese function
function totalExpensesSum() {
  const expensesSum =
    getInput("second-input") +
    getInput("third-input") +
    getInput("fourth-input");
  return expensesSum;
}
// total expenses function

function showTheOutputOfExpenses() {
  let totalExpensesOutput = document.getElementById("total-expenses");
  let totalExpensesOutputData = totalExpensesOutput.innerText;
  if (totalExpensesSum() <= getInput("first-input")) {
    totalExpensesOutput.innerText = totalExpensesSum();
    return totalExpensesOutput.innerText;
  } else {
    alert("A freindly reminder that you cant expense more than your income");
  }
}

//function for showing The Output Of remaining balancesnses
function showTheOutputOfRemainingBalance() {
  let totalRemainingOutput = document.getElementById("balance");
  let totalRemainingOutputData = totalRemainingOutput.innerText;
  let remainingBalance = getInput("first-input") - totalExpensesSum();
  totalRemainingOutput.innerText = remainingBalance;
  return totalRemainingOutput.innerText;
}
//function save button task
function saveYourMoney() {
  let moneyInput = document.getElementById("money-saved");
  let moneyInputData = moneyInput.innerText;
  if (getInput("fifth-input") > 0) {
    let savingMoney = (getInput("fifth-input") * getInput("first-input")) / 100;
    if (savingMoney > showTheOutputOfRemainingBalance()) {
      alert("sorry! you cant save more than your balance");
    } else {
      moneyInput.innerText = savingMoney;
      return savingMoney;
    }
  } else {
    alert("plz give enter a number");
  }
}
//
//remaining money after savings
function remainingMoneyAfterSavings() {
  let remainingMoney = document.getElementById("remaining-balance");
  let remainingMoneyDataType = remainingMoney.innerText;
  let remainingMoneyData = showTheOutputOfRemainingBalance() - saveYourMoney();
  remainingMoney.innerText = remainingMoneyData;
  return remainingMoneyData;
}
// save button click handeling
document.getElementById("save-button").addEventListener("click", function () {
  //amount saved from income by given percentage
  saveYourMoney();
  //money available after savings
  remainingMoneyAfterSavings();
});
