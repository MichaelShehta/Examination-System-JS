var stdEmail = localStorage.email;
const localusername = localStorage.getItem("username");
var std = JSON.parse(window.localStorage.getItem(stdEmail));
var encode = localStorage.result;
var stdResult = atob(encode);


// console.log(stdEmail);
// console.log(stdResult);
// console.log(localusername);



var emaillocation = document.getElementById("emaillocation");
var resultlocation = document.getElementById("resultlocation");
var usernamelocation = document.getElementById("usernamelocation");

usernamelocation.innerText = localusername;
emaillocation.innerText = stdEmail;
resultlocation.innerText = stdResult;