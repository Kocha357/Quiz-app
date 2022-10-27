window.addEventListener("load",function(){
 const QUESTION_WRAPPER = document.getElementById("question-wrapper");
 const FINISH_BTN = document.getElementById("check-the-answers");
 let totalScore = document.getElementById("score");
let score = 0;

 let maxScore = 4;

 

 
fetch("questions.json")
.then(function(response){
    if(!response.ok){
        throw new Error("error while reading file")
    } return response.json();

}).then(function(quizQuestions){
    QUESTION_WRAPPER.innerHTML +=`<h2>${quizQuestions.quiz.q1.question}</h2>`
    
    for( let i = 0; i < quizQuestions.quiz.q1.options.length; i++){
        QUESTION_WRAPPER.innerHTML +=`
      <input type="radio" name="answer1" class="answer1" value = "${quizQuestions.quiz.q1.options[i]}" />
        <label for="answer1" class="answerOne">${quizQuestions.quiz.q1.options[i]}</label><br>`
    }
    
    
     QUESTION_WRAPPER.innerHTML +=`<h2>${quizQuestions.quiz.q2.question}</h2>`
    
    for( let i = 0; i < quizQuestions.quiz.q2.options.length; i++){
        QUESTION_WRAPPER.innerHTML +=`
      <input type="radio" name="answer2" class="answer2" value = "${quizQuestions.quiz.q2.options[i]}" />
        <label for="answer2" class="answerTwo">${quizQuestions.quiz.q2.options[i]}</label><br>`
    }
     QUESTION_WRAPPER.innerHTML +=`<h2>${quizQuestions.quiz.q3.question}</h2>`
    
    for( let i = 0; i < quizQuestions.quiz.q3.options.length; i++){
        QUESTION_WRAPPER.innerHTML +=`
      <input type="radio" name="answer3" class="answer3" value = "${quizQuestions.quiz.q3.options[i]}" />
        <label for="answer3"class="answerThree" >${quizQuestions.quiz.q3.options[i]}</label><br>`
    }
     QUESTION_WRAPPER.innerHTML +=`<h2>${quizQuestions.quiz.q4.question}</h2>`
    
    for( let i = 0; i < quizQuestions.quiz.q4.options.length; i++){
        QUESTION_WRAPPER.innerHTML +=`
      <input type="radio" name="answer4" class="answer4" value = "${quizQuestions.quiz.q4.options[i]}" />
        <label for="answer4 " class="answerFour">${quizQuestions.quiz.q4.options[i]}</label><br>`
    }
    let correctAnswer1 = quizQuestions.quiz.q1.answer; 
    let correctAnswer2 = quizQuestions.quiz.q2.answer;
    let correctAnswer3 = quizQuestions.quiz.q3.answer;
    let correctAnswer4 = quizQuestions.quiz.q4.answer;

    FINISH_BTN.addEventListener("click", function(){
         let radio1 = document.querySelector(
          'input[name ="answer1"]:checked'
        ).value;
            if(radio1 === correctAnswer1){
              let labelOne = document.getElementsByClassName("answerOne");
              for(let i = 0; i < labelOne.length; i++){
                if(labelOne[i]){
                    labelOne[3].classList.add("correct-answer")
                    
                }
                
              }
               score += 1
            }

        let radio2 = document.querySelector(
          'input[name ="answer2"]:checked'
        ).value;
         if(radio2 === correctAnswer2){
             let labelTwo = document.getElementsByClassName("answerTwo");
              for(let i = 0; i < labelTwo.length; i++){
                if(labelTwo[i]){
                    labelTwo[0].classList.add("correct-answer")
                }
                
              }
                 
                  score += 1
            }
        let radio3 = document.querySelector(
          'input[name ="answer3"]:checked'
        ).value;
         if(radio3 === correctAnswer3){
             let labelThree = document.getElementsByClassName("answerThree");
              for(let i = 0; i < labelThree.length; i++){
                if(labelThree[i]){
                    labelThree[0].classList.add("correct-answer")
                }
                
              }
                
                 score += 1
            }

        let radio4 = document.querySelector(
          'input[name ="answer4"]:checked'
        ).value;
         if(radio4 === correctAnswer4){
             let labelFour = document.getElementsByClassName("answerFour");
              for(let i = 0; i < labelFour.length; i++){
                if(labelFour[i]){
                    labelFour[0].classList.add("correct-answer")
                }
                
              }
                
                 score += 1
            }

         totalScore.innerHTML =`${score}  /4 Answers correct!`
        
        
       FINISH_BTN.textContent = "Play Again"
       if(FINISH_BTN.textContent = "Play Again"){
        
        FINISH_BTN.onclick = function(){
            totalScore.innerHTML = ``
           window.location.reload();
        }
       }
    })
    console.log(quizQuestions)
})

 .catch(function(err){
    console.log("Fetch problem: " + err.message)
 })

 
 
    
    })