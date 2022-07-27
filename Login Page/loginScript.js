// Catch LocalStorge 
const localEmail = localStorage.getItem("email");
const localPassword = localStorage.getItem("password");

// Console To Check
console.log(localEmail);
console.log(localPassword);

// Here Get Email And Password
const checkEmail = document.getElementById("email");
const checkPassword = document.getElementById("password");
const loginBtn = document.getElementById("login");
const show1 = document.getElementById("res1");
const show2 = document.getElementById("res2");

// Add Event To Loging Button
loginBtn.addEventListener("submit", e => {
    e.preventDefault();
    checkinputs();
})

// Fun Check Before Login Depend On LocalStorage And Register Page
function checkinputs() {
    const emailValue = checkEmail.value;
    const passValue = checkPassword.value;

    if (emailValue !== localEmail) {
        var output = "Invalid Email Please Try Again ..";
        show1.style.visibility = "visible";
        show1.innerHTML = output;
        return false;
    } else {
        show1.style.visibility = "hidden";
    }
    if (passValue !== localPassword) {
        var output = "Incorrecct Password Please Try Again ..";
        show2.style.visibility = "visible";
        show2.innerHTML = output;
        return false;
    } else {
        show2.style.visibility = "hidden";
    }
}



function disableBack() {
    window.history.forward();
}
setTimeout("disableBack()", 0);
window.onunload = function() {
    null;
};