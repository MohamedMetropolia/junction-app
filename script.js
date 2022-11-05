'use strict';

const acc1 = {
    supplierName: 'A',
    supplierPass: 123,
}

const acc2 = {
    supplierName: 'B',
    supplierPass: 234,
}


const accounts = [acc1, acc2];

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const btnLogin = document.getElementById('login__btn');



document.getElementById("login_btn").onclick = function () {
    for (let acc of accounts) {
        console.log(acc);
        if (username === acc.supplierName && password === acc.supplierPass) {
            location.href = "data.html";
        }
        else {
            console.log('Wrong credentials');
        }
    }
}

// btnLogin.addEventListener('click', function(event) {
//     event.preventDefault();

    // currentAccount = accounts.find(acc => acc.supplierName === username);
    // if (currentAccount?.supplierPass === password) {

// loginToAccount = function () {
//     for (let currentAccount of accounts) {
//         if (username === currentAccount.supplierName && password === currentAccount.supplierPass) {
//             console.log(currentAccount);
//         console.log(supplierPass);
//         console.log(supplierName);
//         window.location = "Data.html";
//         }
//     }
// }




// document.getElementById("login_btn").onclick = function () {
//     location.href = "Data.html";
// }


    // if (currentAccount?.supplierPass === password && ) {
    //     console.log(currentAccount);
    //     console.log(supplierPass);
    //     console.log(supplierName);
    //     window.location = "Data.html";
    // }
// })



// btnLogin.addEventListener('click', function (event) {
//     event.preventDefault();
  
//     currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
//     if (currentAccount?.pin === Number(inputLoginPin.value)) {
//       //display UI and welcome message
//       labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
//       containerApp.style.opacity = 100;
  
//       // Create current date & time 
//       const now = new Date();
//       const options = {
//         hour: 'numeric',
//         minute: 'numeric',
//         day: 'numeric',
//         month: 'numeric',
//         year: 'numeric',
//       };
//       labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
  
//       // clear input fields
//       inputLoginUsername.value = inputLoginPin.value = '';
//       inputLoginPin.blur();
  

