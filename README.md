# Javascript Quiz Project

# Authors
Allen Klein
- [Link to Javscript Quiz Site](https://allen-ek.github.io/javascript-quiz/)
- [Link to Github Repository](https://github.com/allen-ek/javascript-quiz)

## Why?
I wanted to create a Javascript quiz website that would be able to determine if the chosen answer was correct. Keep track of how many are correct to determine a score as well as save high scores to create a highscore list.
## What I learned
I learned various javascript methods and selectors to select certain html elements on the page   for dynamic functionality to an HTML webpage with CSS styling. I also learned how to create,modify and iteriate through arrays in javascript. I also learned how the user can make input selections and from there create different outputs based on the multiple choice question.

## Technologies Used
HTML
JavaScript
CSS
Github
## Code Snippet
```html
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
```
This code snippet showcases usage of the question prompt in javascript to be able to display onto the corresponding html page.