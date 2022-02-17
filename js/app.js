//---------- input function----------
function getInput(elementId){
    const elementInput = document.getElementById(elementId);
    const elementInputValue = parseFloat(elementInput.value) ;
    return elementInputValue;
}
// ------------- calculate income ---------------
document.getElementById("calculate-btn").addEventListener("click", function(){
   const totalExpensesInput = document.getElementById("total-expenses");
// ---------  Total Expenses  ------- 
    let food = getInput("food");
    let rent = getInput("rent");
    let clothes = getInput("clothes");
    const totalExpensesValue = food + rent + clothes; 
//-------------    Balance-----------
    const incomeValue  = getInput("income");
    const balance = document.getElementById("balance");
    const failureMsg = document.getElementById("failure-msg");
     if((incomeValue > totalExpensesValue && incomeValue > 0 && totalExpensesValue > 0))
    {
        totalExpensesInput.innerText = totalExpensesValue;
        balance.innerText = incomeValue - totalExpensesValue;
    }
    else if(food < 0){
        failureMsg.style.display = "block";
    }
    else if(rent < 0){
        failureMsg.style.display = "block";
    }
    else if(clothes < 0){
        failureMsg.style.display = "block";
    }
    else{
        failureMsg.style.display = "block";
    }
})
// -------- calculate saving ---------------
document.getElementById("save-btn").addEventListener("click", function(){
    const income = getInput("income");
    const saveInput = getInput("save-input");
    const failureMsg = document.getElementById("failure-msg");
    const savingAmount = document.getElementById("saving-amount");
    const totalSaving = income * (saveInput / 100);
    savingAmount.innerText = totalSaving;
    //------------- Remaining Balance part---------
    const balance = document.getElementById("balance");
    const balanceValue = parseFloat(balance.innerText);
    //----------- remaining balance---------------
    document.getElementById("remaining-balance").innerText =  balanceValue - parseFloat(savingAmount.innerText);
    if(isNaN(totalSaving)){
        failureMsg.style.display = "block";
    }
    else if(parseFloat(savingAmount.innerText) > balanceValue){
        failureMsg.style.display = "block";
    }
})

