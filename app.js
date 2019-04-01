const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpense = 0

const clear = () => {
    reasonInput.value = '';
    reasonAmount.value = '';
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value
    const enteredAmount = reasonAmount.value

    if ( enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0 ) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ": $" + enteredAmount;
    expensesList.appendChild(newItem);

    totalExpense += +enteredAmount
    totalExpensesOutput.textContent = totalExpense

    clear()

});

cancelBtn.addEventListener('click', () => {
    clear();
});