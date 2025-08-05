var qcurrentQuestionsp = 0;
                
                
        var qcorrectCountsp = 0; 
localStorage.setItem('qcorrectCountsp', qcorrectCountsp);
                          
        var qwrongCountsp = 0; 
localStorage.setItem('qwrongCountsp', qwrongCountsp);
                 
        var qmarkssp = 0;
localStorage.setItem('qmarkssp', qmarkssp);
        var qskipedsp = 0; 
localStorage.setItem('qskipedsp', qskipedsp);
                              
          var ansered = 0;
           var notansered = 0;
         var marked = 0;
                     
                        
                        
                        
      nextbtton(qcurrentQuestionsp);


        function changeLanguage() {
    var language = document.getElementById("languageSelect").value;
    var questions = quizData[language].questions;
    var options = quizData[language].options;
document.getElementById("questionNumber").innerHTML = + (qcurrentQuestionsp + 1) ;
    // Display the current question
    document.getElementById("question").innerHTML = questions[qcurrentQuestionsp];

    // Display the options
    var optionElement = document.getElementById("options");
    optionElement.innerHTML = '';
    var optionLetters = ['A', 'B', 'C', 'D', 'E']; // Array of option letters
    for (var i = 0; i < options[qcurrentQuestionsp].length; i++) {
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
        label.innerHTML = options[qcurrentQuestionsp][i];
        optionWrapper.appendChild(label);

        optionElement.appendChild(optionWrapper);
    }
}


        function showNextQuestion() {
            qcurrentQuestionsp++;
            if (qcurrentQuestionsp >= quizData.en.questions.length) {
                qcurrentQuestionsp = 0;
            }
            changeLanguage();
        }

        function showPreviousQuestion() {
            qcurrentQuestionsp--;
            if (qcurrentQuestionsp < 0) {
                qcurrentQuestionsp = quizData.en.questions.length - 1;
            }
            changeLanguage();
        }

        function checkAnswer() {
            var language = document.getElementById("languageSelect").value;
          


            var selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                var selectedAnswer = parseInt(selectedOption.value);
                var correctAnswer = quizData[language].correctAnswers[qcurrentQuestionsp];
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
        var correctAnswer = quizData[language].correctAnswers[qcurrentQuestionsp];
        if (parseInt(selectedOption.value) === correctAnswer) {
            selectedOption.nextElementSibling.classList.add("correct");
            qcorrectCountsp++;
            
              qmarkssp = qmarkssp + 1; 
              localStorage.setItem('qmarkssp', qmarkssp);
            localStorage.setItem('qcorrectCountsp', qcorrectCountsp);
            
             // Increment the correct count
        } else {
            selectedOption.nextElementSibling.classList.add("incorrect");
            qwrongCountsp++;
            
              qmarkssp = qmarkssp - 0.25;
               localStorage.setItem('qmarkssp', qmarkssp);
            localStorage.setItem('qwrongCountsp', qwrongCountsp);
            
             // Increment the wrong count
        }
        
        
        
         // Store the current question, selected option, and correct answer
        var quizProgress = JSON.parse(localStorage.getItem('qquizProgresssp')) || [];
        quizProgress[qcurrentQuestionsp] = {
            question: quizData[language].questions[qcurrentQuestionsp],
            selectedOption: selectedOption.value,
            correctAnswer: correctAnswer
        };
        localStorage.setItem('qquizProgresssp', JSON.stringify(quizProgress));
    }
        
    
    countAnswers();

    showNextQuestion();
    if (selectedOption) {
        selectedOption.checked = false;
    }
    
    checkedopn();
    
}


        function countAnswers() {
            var qtotalQuestions = quizData.en.questions.length;
           var qskipedsp = qtotalQuestions - (qcorrectCountsp + qwrongCountsp);
            localStorage.setItem('qskipedsp', qskipedsp);
        }
        
        
        // Initialize quiz data in localStorage
localStorage.setItem('questions', JSON.stringify(quizData.en.questions));
localStorage.setItem('correctAnswers', JSON.stringify(quizData.en.correctAnswers));    
localStorage.setItem('totalQuestions', quizData.en.questions.length);



