console.log("Login page script loaded");

document.getElementById("login-btn")
.addEventListener("click", function() {
    //1 get the mobile number and pin from the input field  
        const inputNumber = document.getElementById('input-number');
        const contractNumber = inputNumber.value;
        console.log(contractNumber)

    //2 get pin input
        const inputPin = document.getElementById('input-pin')
        const pin = inputPin.value;
        console.log(pin)

    //3 get match pin and mobile number
    if(contractNumber == "01234567890" && pin=="1234"){
        //3-1 true >> alert > home page
        alert('login Success');

        // window.location.replace("/Home.html")
        window.location.assign("/Home.html")
    }
    else{
        alert('login failed');
        return;
    }
    
    //3-2 faluse >> alert >  return


});
// document.getElementById('login-btn').addEventListener('click',function{
//     const inputNumber = document.getElementById('input-number');
//     const contractNumber = inputNumber.value;
//     console.log(contractNumber);

//     const inputPin = document.getElementById('input-number');
//     const pin = inputPin.value;
//     console.log(pin);


//     if(contractNumber = '2o31940' && inputPin = '121232'){
//         alert('login Success');
        
//         window.location.assign('/Home.html')
//     }
//     else{
//         alert('login Error');
//         return;
//     }
// })