
//List of  quiz questions
const questions=[{
    question:"What does HTML stand for",
    option1:"Hyponotic Text Marked Language",
    option2:"Hyper Text Markup Language",
    option3:"",
    answer:""
},
{
    question:"What does CSS do",
    option1:"Create the webpage",
    option2:"Determine the styling of the page",
    option3:"It does nothing",
    answer:""
},
{
    question:"Which option is the divide operator in Javascript?",
    option1:"*",
    option2:"%",
    option3:"/",
    answer:""
},
{
    question:"How do I create an array in Javascript",
    option1:"Create the webpage",
    option2:"Determine the styling of the page",
    option3:"It does nothing",
    answer:""
},
{
    question:"How many JavaScript primitave data types are there?",
    option1:"5",
    option2:"6",
    option3:"7",
    answer:"7"
},
{
    question:"Which HTML element defines the title of a document?",
    option1:"<title>",
    option2:"<meta>",
    option3:"<head>",
    answer:""
},
]
const timeEl =document.querySelector("#timer");
startQuiz();
// start quiz set inital state
function startQuiz(){
    let timerId=setInterval(time,1000);
    timeEl.textContent=500;
}

function quizQuestion(){
    var currQIndex=0;
    const overDiv = document.getElementById("end");
    gameoverDiv.style.display = "none";
    if (currQIndex === endQIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQ.choiceA;
    buttonB.innerHTML = currentQ.choiceB;
    buttonC.innerHTML = currentQ.choiceC;
    buttonD.innerHTML = currentQ.choiceD;
};

