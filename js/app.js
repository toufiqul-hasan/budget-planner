function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // Clear Input Field
  inputField.value = "";
  return amountValue;
}

document.getElementById("calculate-button").addEventListener("click", function () {
  // Getting Input Values
  const incomeAmount = getInputValue("income-input");
  const foodCostAmount = getInputValue("food-cost");
  const rentCostAmount = getInputValue("rent-cost");
  const clothesCostAmount = getInputValue("clothes-cost");
  // Total Cost Calculation
  const totalCost = foodCostAmount + rentCostAmount + clothesCostAmount;
  // Total Balance Calculation
  const balance = incomeAmount - totalCost;
  // Update Total Balance
  const balanceTotal = document.getElementById("balance");
  const balanceText = balanceTotal.innerText;
  const totalBalance = parseFloat(balanceText) + balance;
  balanceTotal.innerText = totalBalance;
  // Update Total Expenses
  const expensesTotal = document.getElementById("total-expenses");
  const expensesText = expensesTotal.innerText;
  const totalExpenses = parseFloat(expensesText) + totalCost;
  expensesTotal.innerText = totalExpenses;
});

document.getElementById("save-button").addEventListener("click", function () {
  const savingsAmount = getInputValue("savings-input");
});
