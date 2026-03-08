document.getElementById("add-money-btn").
addEventListener("click",function(){
    // 1 -bank account get
   const bankAccount = getValuefromInput("add-money-bank");
   console.log(bankAccount);
   if (bankAccount == "Select a Bank"){
    alert("Please select a bank");
    return;
   }
//    2 -getg bank account number
    const account = getValuefromInput("add-money-number");
    if(account.length != 11){
        alert("Invalid Account Number");
        return;
    }
    // 3- get amount
    const amount = getValuefromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = getBalance() + Number(amount);
//    console.log(newBalance);
    const pin = getValuefromInput("add-money-pin");
    if(pin =="1234"){
        alert(`add Money Success from
            ${bankAccount} 
            at ${new Date() }`);
        setBalance(newBalance);

        // 1-history-container ke dore niye ashbo
        const history = document.getElementById("history-container");
        // 2-new div create korbo
        const newHistory = document.createElement("div");
        // 3- new div innerhtml add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            add Money Success from ${bankAccount},acc-no  ${account} at ${new Date() }
        </div>
       `;
        // 4- history container e newdiv append korbo
        history.append(newHistory);

    }else{
        alert("Invalid add pin");
        return;
    }


});