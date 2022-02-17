// calculate button
document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = document.getElementById("income-value");
    const addTk = document.getElementById("add-tk");
    addTk.innerText = income.value;
    income.value = "";
})