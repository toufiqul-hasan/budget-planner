function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // Clear Input Field
  inputField.value = "";
  return amountValue;
}

// Handle Calculate Button
document.getElementById("calculate-button").addEventListener("click", function () {
  // Getting Input Values
  const incomeAmount = getInputValue("income-input");
  const foodCostAmount = getInputValue("food-cost");
  const rentCostAmount = getInputValue("rent-cost");
  const clothesCostAmount = getInputValue("clothes-cost");
  // Cost Calculation
  const totalCost = foodCostAmount + rentCostAmount + clothesCostAmount;
  // Balance Calculation
  const balance = incomeAmount - totalCost;
  // Update Total Expenses
  const expensesTotal = document.getElementById("total-expenses");
  const expensesText = expensesTotal.innerText;
  const totalExpenses = parseFloat(expensesText) + totalCost;
  expensesTotal.innerText = totalExpenses;
  // Update Balance
  const balanceTotal = document.getElementById("balance");
  const balanceText = balanceTotal.innerText;
  const totalBalance = parseFloat(balanceText) + balance;
  balanceTotal.innerText = totalBalance;
  // Handle Save Button
  document.getElementById("save-button").addEventListener("click", function () {
    // Getting Input Value
    const savingsInput = getInputValue("savings-input");
    // Saving Calculation
    const saving = (incomeAmount * savingsInput) / 100;
    // Remaining Balance Calculation
    const remainingBalance = balance - saving;
    // Update Saving Amount
    const savingAmount = document.getElementById("saving-amount");
    const savingAmountText = savingAmount.innerText;
    const totalSavingAmount = parseFloat(savingAmountText) + saving;
    savingAmount.innerText = totalSavingAmount;
    // Update Remaining Balance
    const remainingBalanceAmount = document.getElementById("remaining-balance");
    const remainingBalanceAmountText = remainingBalanceAmount.innerText;
    const totalRemainingBalanceAmount = parseFloat(remainingBalanceAmountText) + remainingBalance;
    remainingBalanceAmount.innerText = totalRemainingBalanceAmount;
  });
});