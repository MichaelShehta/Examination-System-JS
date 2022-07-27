const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', e => {
    checkInputs();
    localStorage.setItem('username', username.value);
    if (checkInputs() == false) {
        e.preventDefault();
    }
});

function checkInputs() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        return false;
    } else {
        localStorage.setItem('email', email.value);
        setSuccessFor(email);
        if (passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords does not match');
            return false;
        } else {
            setSuccessFor(password2);
            localStorage.setItem('password', password.value);
            return true;
        }
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Regular Expression To Validate On Email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// Function To Disable To Return To this Page
function disableBack() {
    window.history.forward();
}
setTimeout("disableBack()", 0);
window.onunload = function() {
    null;
};