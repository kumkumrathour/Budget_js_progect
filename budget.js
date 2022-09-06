// select element 
const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".income-total");
const outcomeTotalE1 = document.querySelector(".outcome-total");
const incomeE1 = document.querySelector("#income");
const expenseE1 = document.querySelector("#expense");
const allE1 = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");


// select betten
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

// input bts
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.querySelector("expense-title-input");
const expenseAmount= document.querySelector("expense-amount-input");


const addIncome = document.querySelector(".add-income");
const incomeTitle = document.querySelector("income-title-input");
const incomeAmount= document.querySelector("income-amount-input");

// variables
let ENTRY_LIST =[];
let balance= 0,income=0, outcome=0;

const DELETE="delete",EDIT="edit";

// event listners
expenseBtn.addEventListener("click",function(){
      show(expenseE1);
      hide([incomeE1, allE1]);
      active(expenseBtn);
      inactive([incomeBtn,allBtn]);
})

incomeBtn.addEventListener("click",function(){
    show(incomeE1);
    hide([expenseE1, allE1]);
    active(incomeBtn);
    inactive([expenseBtn,allBtn]);
})

allBtn.addEventListener("click",function(){
    show(allE1);
    hide([expenseE1, incomeE1]);
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
})
addExpense.addEventListener("click",function(){
    if(!expenseTitle.value || !expenseAmount.value) return;
    let expense ={
        type: "expense",
        title :expenseTitle.value,
        amount: expenseAmount
    }
    ENTRY_LIST.push(expense);
    updateUI();
    clearInput([expenseAmount.value , expenseAmount.value])

})

addIncome.addEventListener("click",function(){
    if(!incomeTitle.value || !incomeAmount.value) return;
    let income ={
        type: "income",
        title : incomeTitle.value,
        amount: incomeAmount
    }
    ENTRY_LIST.push(income);
    updateUI();
    clearInput([incomeAmount.value , incomeAmount.value])
})
//   HELPERS
function updateUI(){
    income = calculateTotal("income", ENTRY_LIST);
    outcome=calculateTotal("outcome",ENTRY_LIST);
    balance=calculateTotal(income,outcome);

    // UPDATE UI
    
}
function calculateTotal(type, list){
     let sum =0;
     list.forEach(entry =>{
        if(entry.type ==type){
            sum+= entry.amount;
        }
     })
     return sum;
}
 

function calculateBalance(income,outcome){
    return income - outcome;
}

function clearInput(inputs){
    inputs.forEach( input =>{
       input.value =""
    })
}


// helpers
function show(element){
          element.classList.remove("hide");
}

function hide(elements){
    elements.forEach(element => {
        element.classList.add("hide");
    })
}

function active(element){
    element.classList.add("active");
}

function inactive( elements ){
    elements.forEach(element =>{
        element.classList.remove("active");
    })
}
