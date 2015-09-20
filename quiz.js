// correctAnswers is where I store the number of questions answered correctly
var correctAnswers = 0;


// the quiz
var questionOne = prompt("What is 0 + 1?");
if(questionOne === "1") {
    alert("You are correct!");
    correctAnswers += 1;
} else {
    alert("The answer is 1.");
}

var questionTwo = prompt("What is 0 + 2?");
if(questionTwo === "2") {
    alert("You are correct!");
    correctAnswers += 1;
} else {
    alert("The answer is 2");
}

var questionThree = prompt("What is 0 + 3?");
if(questionThree === "3") {
    alert("You are correct!");
    correctAnswers += 1;
} else {
    alert("The answer is 3");
}

var questionFour = prompt("What is 0 + 4?");
if (questionFour === "4") {
    alert("You are correct!");
    correctAnswers += 1;
} else {
    alert("The anwser is 4");
}

var questionFive = prompt("What is 0 + 5?");
if (questionFive === "5") {
    alert("You are correct!");
    correctAnswers += 1;
} else {
    alert("The answer is 5");
}

//assigning # of correct answers to grades
var grade;
if(correctAnswers === 5) {
    grade = "+A";
} else if(correctAnswers === 4) {
    grade = "B";
} else if(correctAnswers === 3) {
    grade = "D";
} else {
    grade = "F";
}

document.write("Thanks for taking my quiz.  Your grade: " + grade);