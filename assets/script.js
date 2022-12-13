//List of  quiz questions
const questions=[{
    question:"What does HTML stand for?",
    option1:"Hyponotic Text Marked Language",
    option2:"Hyper Text Markup Language",
    option3:"Hyper Text Markdown Language",
    answer:"B"
},
{
    question:"What does CSS control?",
    option1:"Create the webpage",
    option2:"Determine the styling of the page",
    option3:"It does nothing",
    answer:"B"
},
{
    question:"Which option is the divide operator in Javascript?",
    option1:"*",
    option2:"%",
    option3:"/",
    answer:"C"
},
{
    question:"How do I create an array in Javascript?",
    option1:"const array=[]",
    option2:"array =[]",
    option3:"[][][]",
    answer:"A"
},
{
    question:"How many JavaScript primitave data types are there?",
    option1:"5",
    option2:"6",
    option3:"7",
    answer:"C"
},
]
const timeEl =document.querySelector("#timer");
var totalTime=45;
var timer;
var score=0;
var correct;
var currQIndex=0;

// start quiz once button is clicked
document.getElementById("strtbtn").addEventListener("click",startQuiz);
//sets intial state of the quiz
function startQuiz(){
    document.getElementById("gameover").style.display = "none";
    document.getElementById("strtpage").style.display = "none";
    quizQuestion();
    //Timer function
    timer=setInterval(function() {
        totalTime--;
        document.getElementById("timer").textContent = "Time" + totalTime;
    
        if(totalTime === 0) {
          clearInterval(timer);
          displayScore();
        }
      }, 1000);
      document.getElementById("quiz").style.display = "block";
}
//function to display the questions
function quizQuestion(){
    document.getElementById("gameover").style.display = "none";
    
    if (currQIndex === questions.length){
        return displayScore();
    } 
    var currentQ = questions[currQIndex];
    document.getElementById("questions").innerHTML = "<p>" + currentQ.question + "</p>";
    document.getElementById("A").innerHTML = currentQ.option1;
    document.getElementById("B").innerHTML = currentQ.option2;
    document.getElementById("C").innerHTML = currentQ.option3;
};
//function to check it the answer chosen is correct
function checkAnswer(input){
    correct = questions[currQIndex].answer;

    if (input === correct && currQIndex !== questions.length){
        score++;
        alert("Correct!");
        currQIndex++;
        quizQuestion();  
    }else if (input !== correct && currQIndex !== questions.length){
        alert("Incorrect")
        currQIndex++;
        quizQuestion();
    }else{
        displayScore();
    }
}
//score display
function displayScore(){
    document.getElementById("quiz").style.display = "none"
    document.getElementById("gameover").style.display = "flex";
    clearInterval(timer);
    document.getElementById("initial").value="";
    document.getElementById("finalScore").innerHTML = "You got " + score + " out of " + questions.length + " correct!";
}
//how to submit the quiz
document.getElementById("submit").addEventListener("click", function highscore(){
    if(document.getElementById("initial").value === "") {
        alert("Enter Initals");
        return false;
    }else{
        var savedHiscores = JSON.parse(localStorage.getItem("savedHiscores")) || [];
        var currentUser = document.getElementById("initial").value.trim();
        var currentHiscore = {
            name : currentUser,
            score : score
    };
    document.getElementById("gameover").style.display = "none";
    document.getElementById("hiscoreContainer").style.display = "flex";
    document.getElementById("hi-scorePage").style.display = "block";
    document.getElementById("endGame").style.display = "flex";
    savedHiscores.push(currentHiscore);
    localStorage.setItem("savedHiscores", JSON.stringify(savedHiscores));
    createHighscores();

    }
});
//create the hiscore list
function createHighscores(){
    document.getElementById("hiscore-initials").innerHTML = "";
    document.getElementById("hiscore-score").innerHTML = "";
    var hiscores = JSON.parse(localStorage.getItem("savedHiscores")) || [];
    for (i=0; i<hiscores.length; i++){
        var name = document.createElement("li");
        var score = document.createElement("li");
        name.textContent = hiscores[i].name;
        score.textContent = hiscores[i].score;
        document.getElementById("hiscore-initials").appendChild(name);
        document.getElementById("hiscore-score").appendChild(score);
    }
}
//highscore display
function displayHighscore(){
    document.getElementById("strtpage").style.display = "none"
    document.getElementById("gameover").style.display = "none";
    document.getElementById("hiscoreContainer").style.display = "flex";
    document.getElementById("hi-scorePage").style.display = "block";
    document.getElementById("endGame").style.display = "flex";

    createHighscores();
}
//clears the score
function clearScore(){
    window.localStorage.clear();
    document.getElementById("hiscore-initials").textContent = "";
    document.getElementById("hiscore-score").textContent = "";
}
//function to replay the quiz and reset values
function replay(){
    document.getElementById("hiscoreContainer").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    document.getElementById("strtpage").style.display = "flex";
    totalTime = 45;
    score = 0;
    currQIndex=0;
}


