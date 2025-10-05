//Const for variables that do not chance
// let for variables that can be changed

// dictionary of questions and answer
const questions = [
    {question:"3+7",answer: 10 },
    {question:"3+3",answer: 6 },
    {question:"7+5",answer: 12},
    {question:"4+4",answer: 8},
    {question:"2+1",answer: 3 },

]

// var for questions
let current = 0; //what question the user is on
let score = 0;   //What score the user has

// Cache the dom elements once as we can reuse them without asking browser to find them ever time
const questionele = document.getElementById("questiondisplay");
const answerele = document.getElementById("fanswer");
const feedbackele = document.getElementById("feedbackarea");
const submitbuttonele = document.getElementById("answerbutton");
const scoreele = document.getElementById("score");

// Show the question function
function showQuestion(){
    const q = questions[current];
    questionele.textContent = q.question; //put question text on the page
    answerele.value = ""; // Clear the previous answers value
    feedbackele.value = ""; // Clear the previous feedbacks value
    feedbackele.className =""; // Clear the correct/incorrect state
}

// submit the answer button
submitbuttonele.addEventListener("click", () => {
    // read the users input then convert it to a number
    const raw = answerele.value.trim();
    const userAnswer = Number(raw);
    const correct = questions[current].answer;

    //input validation for when answer is empty or invalid numbers
    if (raw == "" || Number.isNaN(userAnswer)){
        feedbackele.textContent = "Please enter a number.";
        feedbackele.className ="incorrect";
        return; //dont move to next question
    }

    // Check if answer is correct
    if (userAnswer == correct){
        feedbackele.textContent = "Correct!";
        feedbackele.className = "correct";
        score++;
    }
    else{
        feedbackele.textContent = "Incorrect!";
        feedbackele.className = "incorrect";

    }

    // Update users score--- note ````` not '''''
    scoreele.textContent = `Score: ${score}`;

    // move onto the next question aafter a short pause
    current++;
    if (current<questions.length){
        setTimeout(showQuestion, 900);
    }
    else{
        // end the quiz
        questionele.textContent = `Quiz complete with the final score of: ${score}/${questions.length}.`;
        answerele.style.display = "none";
        submitbuttonele.style.display = "none";
    }
}
);
// Start the quiz
showQuestion();