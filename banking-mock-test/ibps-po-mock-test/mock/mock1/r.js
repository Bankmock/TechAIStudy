var rcurrentQuestionsp = 0;
                
                
        var rcorrectCountsp = 0;
localStorage.setItem('rcorrectCountsp', rcorrectCountsp);
                          
        var rwrongCountsp = 0; 
localStorage.setItem('rwrongCountsp', rwrongCountsp);
                 
        var rmarkssp = 0;
localStorage.setItem('rmarkssp', rmarkssp);
        var rskipedsp = 0;
localStorage.setItem('rskipedsp', rskipedsp);
                              
          var ansered = 0;
           var notansered = 0;
         var marked = 0;
      
                     
                        
                        
                        
      nextbtton(rcurrentQuestionsp);


        function changeLanguage() {
    var language = document.getElementById("languageSelect").value;
    var questions = quizData[language].questions;
    var options = quizData[language].options;
document.getElementById("questionNumber").innerHTML = + (rcurrentQuestionsp + 1) ;
    // Display the current question
    document.getElementById("question").innerHTML = questions[rcurrentQuestionsp];

    // Display the options
    var optionElement = document.getElementById("options");
    optionElement.innerHTML = '';
    var optionLetters = ['A', 'B', 'C', 'D', 'E']; // Array of option letters
    for (var i = 0; i < options[rcurrentQuestionsp].length; i++) {
        var optionWrapper = document.createElement("div");
        optionWrapper.className = "option-wrapper";

        var optionLetter = document.createElement("span");
        optionLetter.className = "option-letter";
        optionLetter.innerHTML = optionLetters[i] + ". ";
        optionWrapper.appendChild(optionLetter);

        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = i;
        radio.onclick = checkAnswer; // Add onclick event to each radio button
        optionWrapper.appendChild(radio);

        var label = document.createElement("label");
        label.innerHTML = options[rcurrentQuestionsp][i];
        optionWrapper.appendChild(label);

        optionElement.appendChild(optionWrapper);
    }
}


        function showNextQuestion() {
            rcurrentQuestionsp++;
            if (rcurrentQuestionsp >= quizData.en.questions.length) {
                rcurrentQuestionsp = 0;
            }
            changeLanguage();
        }

        function showPreviousQuestion() {
            rcurrentQuestionsp--;
            if (rcurrentQuestionsp < 0) {
                rcurrentQuestionsp = quizData.en.questions.length - 1;
            }
            changeLanguage();
        }

        function checkAnswer() {
            var language = document.getElementById("languageSelect").value;
          


            var selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                var selectedAnswer = parseInt(selectedOption.value);
                var correctAnswer = quizData[language].correctAnswers[rcurrentQuestionsp];
                if (selectedAnswer === correctAnswer) {
                    selectedOption.nextElementSibling.classList.add("correct"); // Add 'correct' class to the label element
                 
                    
     
                    
                    
                     // Increment the correct count
                } else {
                    selectedOption.nextElementSibling.classList.add("incorrect"); // Add 'incorrect' class to the label element
                 
                    
                             
                     // Increment the wrong count
                }

            } else {
                alert("Please select an option.");
            }
        }

        function saveAndNext() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        var language = document.getElementById("languageSelect").value;
        var correctAnswer = quizData[language].correctAnswers[rcurrentQuestionsp];
        if (parseInt(selectedOption.value) === correctAnswer) {
            selectedOption.nextElementSibling.classList.add("correct");
            rcorrectCountsp++;
            
              rmarkssp = rmarkssp + 1; 
              localStorage.setItem('rmarkssp', rmarkssp);
            localStorage.setItem('rcorrectCountsp', rcorrectCountsp);
            
             // Increment the correct count
        } else {
            selectedOption.nextElementSibling.classList.add("incorrect");
            rwrongCountsp++;
            
              rmarkssp = rmarkssp - 0.25;
               localStorage.setItem('rmarkssp', rmarkssp);
            localStorage.setItem('rwrongCountsp', rwrongCountsp);
            
             // Increment the wrong count
        }
        
        
        
         // Store the current question, selected option, and correct answer
        var quizProgress = JSON.parse(localStorage.getItem('rquizProgresssp')) || [];
        quizProgress[rcurrentQuestionsp] = {
            question: quizData[language].questions[rcurrentQuestionsp],
            selectedOption: selectedOption.value,
            correctAnswer: correctAnswer
        };
        localStorage.setItem('rquizProgresssp', JSON.stringify(quizProgress));
    }
        
    
    countAnswers();

    showNextQuestion();
    if (selectedOption) {
        selectedOption.checked = false;
    }
    
    checkedopn();
    
}


        function countAnswers() {
            var rtotalQuestions = quizData.en.questions.length;
           var rskipedsp = rtotalQuestions - (rcorrectCountsp + rwrongCountsp);
            localStorage.setItem('rskipedsp', rskipedsp);
        }
        
        
        // Initialize quiz data in localStorage
localStorage.setItem('questions', JSON.stringify(quizData.en.questions));
localStorage.setItem('correctAnswers', JSON.stringify(quizData.en.correctAnswers));    
localStorage.setItem('totalQuestions', quizData.en.questions.length);



