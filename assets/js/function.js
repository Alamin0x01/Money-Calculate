// income Field: 'income-field'
// food Field: 'food-field'
// rent Field: 'rent-field'
//cloth Field: 'cloths-field'
//expanse Area: 'expanse'
// balance Area: 'balance'


// function for the calculation Balance and Expanse

function calculateExpanseAndBalance() {
    const incomeField = getElementValueAsNumber('income-field')
    const foodField = getElementValueAsNumber('food-field')
    const rentField = getElementValueAsNumber('rent-field')
    const clothField = getElementValueAsNumber('cloths-field')
    const expanseArea = fetchElementById('expense')
    const balanceArea = fetchElementById('balance')
    const saveButton = fetchElementById('save-button')
    const showAlert = document.getElementsByClassName("alert")

    const total_expanse = foodField + rentField + clothField
    const total_balance = incomeField - total_expanse

    if (foodField < 0 || rentField < 0 || clothField < 0) {
        alert("Can't add Negative value")
    }
    else if (isNaN(foodField) || isNaN(rentField) || isNaN(clothField)) {
        alert("Can't add Letter or Text")
    }
    else {

        expanseArea.innerText = total_expanse
        balanceArea.innerText = total_balance
    }
    if (balanceArea.innerText < 0) {
        for (const i in showAlert) {
            showAlert[i].style.display = "block"
            saveButton.disabled = true
        }
    }
    else {
        for (const i in showAlert) {
            showAlert[i].style.display = "none"
            saveButton.disabled = false
        }
    }
}

// function for the calculation of save from income and remaining balance

function saveMoneyFromIncome() {
    const saveField = getElementValueAsNumber('save-field')
    const incomeField = getElementValueAsNumber('income-field')
    const saveAmountArea = fetchElementById('save-amount')
    const remainingBalanceArea = fetchElementById('remaining-balance')
    const balanceArea = fetchElementById('balance')

    if (saveField < 0) {
        alert("Can't add Negative value")
    }
    else if (isNaN(saveField)) {
        alert("Can't add Letter or Text")
    }
    else {
        const save = incomeField * (saveField / 100)
        const remainingBalance = parseFloat(balanceArea.innerText) - save

        saveAmountArea.innerText = save
        remainingBalanceArea.innerText = remainingBalance
    }
}