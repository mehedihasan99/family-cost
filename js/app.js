function getInput(elementId){
    const elementInput = document.getElementById(elementId);
    const elementInputValue = parseFloat(elementInput.value) ;
    elementInput.value = "";
    return elementInputValue;
}
// calculate button
document.getElementById("calculate-btn").addEventListener("click", function(){
   const totalExpensesInput = document.getElementById("total-expenses");
//   Total Expenses   
   const totalExpensesValue = getInput("food") + getInput("rent") + getInput("clothes"); 
//    Balance
    const incomeValue  = getInput("income");
    const balance = document.getElementById("balance");
    const failureMsg = document.getElementById("failure-msg");
    if((incomeValue > totalExpensesValue && incomeValue > 0 && totalExpensesValue > 0))
    {
        totalExpensesInput.innerText = totalExpensesValue;
        balance.innerText = incomeValue - totalExpensesValue;
    }
    else{
        failureMsg.style.display = "block";
    }
})


