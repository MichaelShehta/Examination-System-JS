// Fun For Question have 3 Parameters 
function Question(i, b, m) {
    this.id = i;
    this.body = b;
    this.modelAnswer = m;
    var answers = [];
    // Fun to check For every choose 
    this.addAnswer = function(objectAnswer) {
        if (objectAnswer.constructor === Answer) {
            answers.push(objectAnswer);
        }
    }
    this.getAnswers = function() {
        return answers;
    }
}
// Fun Answer have 2 parameters 
function Answer(i, v) {
    this.id = i;
    this.value = v;
}

// Object 1 .. Question 1 => Sholud Pass 3 parameters and the same way to another questios
var question1 = new Question(1, "Which type of JavaScript language is ___", "Object-Oriented");

// new object From Answer Fun .. And take the same way to another Answers
var answer1 = new Answer(1, "Object-Oriented");
var answer2 = new Answer(2, "Object-Based");
var answer3 = new Answer(3, "Assembly-language");
var answer4 = new Answer(4, "High-level");
question1.addAnswer(answer1);
question1.addAnswer(answer2);
question1.addAnswer(answer3);
question1.addAnswer(answer4);

var question2 = new Question(2, "Which one of the following also known as Conditional Expression:", "If-then-else statement");
var answer5 = new Answer(5, "Alternative to if-else");
var answer6 = new Answer(6, "Switch statement");
var answer7 = new Answer(7, "If-then-else statement");
var answer8 = new Answer(8, "immediate if");
question2.addAnswer(answer5);
question2.addAnswer(answer6);
question2.addAnswer(answer7);
question2.addAnswer(answer8);

var question3 = new Question(3, "what Does XML stand For", "Extensible Markup Language");
var answer9 = new Answer(9, "Extra Multi-Program Language");
var answer10 = new Answer(10, "Extensible Markup Language");
var answer11 = new Answer(11, "Answer 1 & 2 ");
var answer12 = new Answer(12, "Nono Of Then");
question3.addAnswer(answer9);
question3.addAnswer(answer10);
question3.addAnswer(answer11);
question3.addAnswer(answer12);

var question4 = new Question(4, "The function and var are known as:", "Throws an error");
var answer13 = new Answer(13, "Shows a warning");
var answer14 = new Answer(14, "Prompts to complete the statement");
var answer15 = new Answer(15, "Throws an error");
var answer16 = new Answer(16, "Ignores the statements");
question4.addAnswer(answer13);
question4.addAnswer(answer14);
question4.addAnswer(answer15);
question4.addAnswer(answer16);

var question5 = new Question(5, "When interpreter encounters an empty statements, what it will do:", "Data types");
var answer17 = new Answer(17, "Keywords");
var answer18 = new Answer(18, "Data types");
var answer19 = new Answer(19, "Declaration statements");
var answer20 = new Answer(20, "Prototypes");
question5.addAnswer(answer17);
question5.addAnswer(answer18);
question5.addAnswer(answer19);
question5.addAnswer(answer20);

var question6 = new Question(6, "what Does SQL stand For?", "Structured Query Language");
var answer21 = new Answer(21, "Structured Query Language");
var answer22 = new Answer(22, "Stylesheet Query Language");
var answer23 = new Answer(23, "Statement Query Language");
var answer24 = new Answer(24, "Stylish Query Language");
question6.addAnswer(answer21);
question6.addAnswer(answer22);
question6.addAnswer(answer23);
question6.addAnswer(answer24);

var question7 = new Question(7, "what Does PHP stand For", "Hyper Text Processor");
var answer25 = new Answer(25, "HyperText Programming");
var answer26 = new Answer(26, "HyperText Processor");
var answer27 = new Answer(27, "Hybrid learning");
var answer28 = new Answer(28, "HyperText Preprogramming");
question7.addAnswer(answer25);
question7.addAnswer(answer26);
question7.addAnswer(answer27);
question7.addAnswer(answer28);

var question8 = new Question(8, "what Does CSS stand For", "Cascading Style Sheet");
var answer29 = new Answer(29, "Common Style Sheet");
var answer30 = new Answer(30, "Colorful Style Sheet");
var answer31 = new Answer(31, "Cascading Style Sheet");
var answer32 = new Answer(32, "Computer Style Sheet");
question8.addAnswer(answer29);
question8.addAnswer(answer30);
question8.addAnswer(answer31);
question8.addAnswer(answer32);

var question9 = new Question(9, "what Does HTML stand For", "Hyper Text Markup Language");
var answer33 = new Answer(33, "Hyper Text Markup Language");
var answer34 = new Answer(34, "Hyper Text Processor");
var answer35 = new Answer(35, "Hyper Text Multiple Language");
var answer36 = new Answer(36, "Hyper Tool Multi Language");
question9.addAnswer(answer33);
question9.addAnswer(answer34);
question9.addAnswer(answer35);
question9.addAnswer(answer36);

var arrOfQuestion = [question1, question2, question3, question4, question5, question6, question7, question8, question9];

// Built-in Fun To Random sort (Questions)
var random_arr = arrOfQuestion.sort(() => Math.random() - .5);
var questionBody = document.getElementById("qbody");
var franswer = document.getElementById("frist");
var secanswer = document.getElementById("second");
var therdanswer = document.getElementById("therd");
var fourthanswer = document.getElementById("fourth");
var numOfQuestion = document.getElementById("numOfQuestion");
var markWindow = document.getElementById("mark");
var Next = document.getElementById("Next");
var Previous = document.getElementById("Previous");
var qnum = document.getElementById("qnum");
var question = document.getElementById("question");
var fradio = document.getElementById("fradio");
var sradio = document.getElementById("sradio");
var thradio = document.getElementById("thradio");
var foradio = document.getElementById("foradio");
var flag = document.getElementById("flag");
var timeDisplay = document.getElementById("time");
var modelAnswers = [];
var stdAnswers = [];
var selectedAnswer;
var markPosition1;
var markPosition2;
var markPosition3;
var markPosition4;
var markPosition5;
var markPosition6;
var markPosition7;
var markPosition8;
var markPosition9;
var Result = 0;

// Making Timer 
function timer() {
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    var message = min + ":" + sec;
    timeDisplay.innerHTML = message;
    if (secondsRemaining === 0) {
        clearInterval(intervalHandle);
        alert("Time Out!");
        window.location.replace("../Result Page/result.html");
        localStorage.setItem("result", btoa(Result));
        calcResult(modelAnswers, stdAnswers);
    } else if (min === hafeTime) {
        timeDisplay.style.color = "green";
    } else if (min === warnning) {
        timeDisplay.style.color = "red";
    }
    secondsRemaining--;
}

function startCountdown() {
    var minutes = 3;
    hafeTime = 2;
    warnning = 1;
    secondsRemaining = minutes * 60;
    intervalHandle = setInterval(timer, 1000);
}

function getQuestion(x) {
    questionBody.innerText = random_arr[x].body;
    selectedAnswer = random_arr[x].getAnswers();
}

function getValues() {
    franswer.innerText = selectedAnswer[0].value;
    secanswer.innerText = selectedAnswer[1].value;
    therdanswer.innerText = selectedAnswer[2].value;
    fourthanswer.innerText = selectedAnswer[3].value;
    fradio.setAttribute("value", selectedAnswer[0].value);
    sradio.setAttribute("value", selectedAnswer[1].value);
    thradio.setAttribute("value", selectedAnswer[2].value);
    foradio.setAttribute("value", selectedAnswer[3].value);
}

// Fun Radio Check For Every Radio-Button (radio history) .. record Radio Click
function radioHistory() {
    if (stdAnswers.includes(fradio.value)) {
        fradio.checked = true;
    } else if (stdAnswers.includes(sradio.value)) {
        sradio.checked = true;
    } else if (stdAnswers.includes(thradio.value)) {
        thradio.checked = true;

    } else if (stdAnswers.includes(foradio.value)) {
        foradio.checked = true;
    } else {
        fradio.checked = false;
        sradio.checked = false;
        thradio.checked = false;
        foradio.checked = false;
    }
}

// Onload => When Click Start EveryThing Will appear and Start Your Exam 
window.onload = function() {
    for (var i = 0; i < random_arr.length; i++) {
        modelAnswers.push(random_arr[i].modelAnswer);
    }
    var startButton = document.getElementById("start");
    startButton.onclick = function() {
        startCountdown();
        numOfQuestion.style.display = "flex";
        Next.style.display = "inline";
        question.style.display = "block";
        startButton.remove();
        var submit = document.getElementById("submit");
        var toresult = document.createElement("button");
        toresult.setAttribute("id", "toresult");
        toresult.innerHTML = "Submit";
        submit.append(toresult);
        toresult.addEventListener("click", function() {
            function calcResult(a, b) {
                for (var i = 0; i < a.length; i++) {
                    if (a.includes(b[i])) {
                        Result++;
                    }
                }
            }
            // To set Result in localStorage to get It After Submit Exam
            calcResult(modelAnswers, stdAnswers);
            localStorage.setItem("result", btoa(Result));
            // To Move You to Result Page
            window.location.replace("../Result Page/result.html");
        })
        getQuestion(0);
        getValues();
        for (var i = 0; i < random_arr.length; i++) {
            var tab = document.createElement("div");
            tab.style.backgroundColor = "#50BBDB";
            tab.style.height = "40px";
            tab.style.width = "40px";
            tab.style.borderRadius = "20px"
            tab.style.margin = "5px"
            tab.innerText = i + 1;
            tab.style.color = "#fff";
            tab.style.paddingLeft = "15px"
            tab.style.paddingTop = "10px"
            tab.style.fontSize = "20px"
            tab.setAttribute("class", "markPosition");
            markWindow.append(tab);
        }
        markPosition1 = document.getElementsByClassName("markPosition")[0];
        markPosition2 = document.getElementsByClassName("markPosition")[1];
        markPosition3 = document.getElementsByClassName("markPosition")[2];
        markPosition4 = document.getElementsByClassName("markPosition")[3];
        markPosition5 = document.getElementsByClassName("markPosition")[4];
        markPosition6 = document.getElementsByClassName("markPosition")[5];
        markPosition7 = document.getElementsByClassName("markPosition")[6];
        markPosition8 = document.getElementsByClassName("markPosition")[7];
        markPosition9 = document.getElementsByClassName("markPosition")[8];

        markPosition1.addEventListener("click", function() {
            getQuestion(Number(markPosition1.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition1.textContent);

        })

        markPosition2.addEventListener("click", function() {
            getQuestion(Number(markPosition2.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition2.textContent);

        })

        markPosition3.addEventListener("click", function() {
            getQuestion(Number(markPosition3.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition3.textContent);

        })

        markPosition4.addEventListener("click", function() {
            getQuestion(Number(markPosition4.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition4.textContent);

        })

        markPosition5.addEventListener("click", function() {
            getQuestion(Number(markPosition5.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition5.textContent);

        })

        markPosition6.addEventListener("click", function() {
            getQuestion(Number(markPosition6.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition6.textContent);

        })

        markPosition7.addEventListener("click", function() {
            getQuestion(Number(markPosition7.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition7.textContent);

        })

        markPosition8.addEventListener("click", function() {
            getQuestion(Number(markPosition8.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition8.textContent);

        })

        markPosition9.addEventListener("click", function() {
            getQuestion(Number(markPosition9.textContent) - 1);
            getValues();
            radioHistory();
            qnum.innerText = Number(markPosition9.textContent);

        })

    };
}

Next.addEventListener("click", function() {
    Previous.style.display = "inline";
    var getSelectedValue = document.querySelector('input[name="answer"]:checked');
    if (getSelectedValue != null && !stdAnswers.includes(getSelectedValue.value)) {
        stdAnswers.push(getSelectedValue.value);
    }
    if (Number(qnum.innerText) === 9) {
        Next.style.display = "none";
    } else if (Number(qnum.innerText) === 8) {
        Next.innerHTML = "Finish <i class='fas fa-angle-right'>";
        Next.style.paddingRight = "20px";
        Next.style.paddingLeft = "20px";
        getQuestion(Number(qnum.innerText));
        getValues();
    } else if (Number(qnum.innerText) < 9) {
        getQuestion(Number(qnum.innerText));
        getValues();
    }
    radioHistory();
    if (Number(qnum.innerText) <= random_arr.length - 1) {
        qnum.innerText = Number(qnum.innerText) + 1;
    } else {
        qnum.innerText = "9";
    }
})

Previous.addEventListener("click", function() {
    Next.style.display = "inline";
    Next.style.paddingLeft = "0px";
    Next.style.paddingRight = "0px";
    Next.innerHTML = "";
    Next.innerHTML = "Next Question<i class='fas fa-angle-right'>";
    var getSelectedValue = document.querySelector('input[name="answer"]:checked');
    if (getSelectedValue != null && !stdAnswers.includes(getSelectedValue.value)) {
        stdAnswers.push(getSelectedValue.value);
    }
    if (Number(qnum.innerText) === 1) {
        Previous.style.display = "none";
    } else if (Number(qnum.innerText) === 2) {
        getQuestion(0);
        getValues();
    } else if (Number(qnum.innerText) <= 9 && Number(qnum.innerText) > 2) {
        getQuestion(Number(qnum.innerText) - 2);
        getValues();
    }
    radioHistory();
    if (Number(qnum.innerText) <= random_arr.length && Number(qnum.innerText) > 2) {
        qnum.innerText = Number(qnum.innerText) - 1;
    } else {
        qnum.innerText = "1";
    }
})

flag.addEventListener("click", function() {
    for (var i = 0; i < random_arr.length; i++) {
        if (Number(qnum.innerText) === Number(markWindow.children[i].innerText)) {
            if (markWindow.children[i].style.backgroundColor != "red") {
                markWindow.children[i].style.backgroundColor = "red";
            } else {
                markWindow.children[i].style.backgroundColor = "rgb(80, 187, 219)";
            }
        }
    }

})