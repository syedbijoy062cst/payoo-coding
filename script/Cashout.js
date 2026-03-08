document.getElementById("Cashout-btn").addEventListener('click',function(){

    const cashoutNumber = getValuefromInput("Cashout-number");

    if(cashoutNumber.length != 11) {
        alert("invalid Number");
        return;
    }
    // 2 get the
    const cashoutAmount = getValuefromInput("Cashout-Amount");

    // 3- get the current Balance 
    const currentBalance = getBalance();
    // 4 calculate Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    const pin = getValuefromInput("Cashout-pin");
    if(pin === "1234"){
        alert("Cashout Successfull");
        setBalance(newBalance);
         // 1-history-container ke dore niye ashbo
        const history = document.getElementById("history-container");
        // 2-new div create korbo
        const newHistory = document.createElement("div");
        // 3- new div innerhtml add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout ${cashoutAmount} TAKA Success to ${bankAccount},acc-no  ${account} at ${new Date() }
        </div>
       `;
        // 4- history container e newdiv append korbo
        history.append(newHistory);
    }
    else{
        alert("invalid pin");
        return;
    }

});


// document.getElementById("Cashout-btn").addEventListener('click',function(){
//     //1- get the agent number & validate
//      const cashoutNumberInput = document.getElementById("Cashout-number");
//      const cashoutNumber = cashoutNumberInput.value;
//      console.log(cashoutNumber);
//      if(cashoutNumber.length !=11){
//         alert("Invalid Agent Number");
//         return;
//      }

//     // 2- get the amount 
//     const cashoutAmountInput = document.getElementById("Cashout-Amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);


//     // 3- get the current Balance 

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4- calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0 ){
//         alert("Invalid");
//         return;
//     }
//     console.log("new balance", newBalance);
//     // 5- get the pin and verify 
//     const cashoutInputPin = document.getElementById("Cashout-pin");
//     const pin = cashoutInputPin.value;
//     if(pin === '1234'){
//             alert("Cashout Successfull");
//         // 5-1 true:: show an alert> set Balance
//         balanceElement.innerText = newBalance;
//     }
//     else{

   
//     // 5-2 false :: show an error alert > return
//     alert("Invalid pin");
//     return;
//      }
// });