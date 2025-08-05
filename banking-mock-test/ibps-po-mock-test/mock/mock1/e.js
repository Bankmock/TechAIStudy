var ecurrentQuestionsp = 0;
                
                
        var ecorrectCountsp = 0;
 localStorage.setItem('ecorrectCountsp', ecorrectCountsp);
                          
        var ewrongCountsp = 0;
 localStorage.setItem('ewrongCountsp', ewrongCountsp);
                 
        var emarkssp = 0;
 localStorage.setItem('emarkssp', emarkssp);
        var eskipedsp = 0;
 localStorage.setItem('eskipedsp', eskipedsp);
                              
          var ansered = 0;
           var notansered = 0;
         var marked = 0;
      nextbtton(ecurrentQuestionsp);
       function changeLanguage() {
    var language = document.getElementById("languageSelect").value;
    var questions = quizData[language].questions;
    var options = quizData[language].options;
document.getElementById("questionNumber").innerHTML = + (ecurrentQuestionsp + 1) ;
    // Display the current question
    document.getElementById("question").innerHTML = questions[ecurrentQuestionsp];

    // Display the options
    var optionElement = document.getElementById("options");
    optionElement.innerHTML = '';
    var optionLetters = ['A', 'B', 'C', 'D', 'E']; // Array of option letters
    for (var i = 0; i < options[ecurrentQuestionsp].length; i++) {
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
        label.innerHTML = options[ecurrentQuestionsp][i];
        optionWrapper.appendChild(label);
optionElement.appendChild(optionWrapper);
    }
}


        function showNextQuestion() {
            ecurrentQuestionsp++;
            if (ecurrentQuestionsp >= quizData.en.questions.length) {
                ecurrentQuestionsp = 0;
            }
            changeLanguage();
        }

        function showPreviousQuestion() {
            ecurrentQuestionsp--;
            if (ecurrentQuestionsp < 0) {
                ecurrentQuestionsp = quizData.en.questions.length - 1;
            }
            changeLanguage();
        }

        function checkAnswer() {
            var language = document.getElementById("languageSelect").value;
            var selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                var selectedAnswer = parseInt(selectedOption.value);
                var correctAnswer = quizData[language].correctAnswers[ecurrentQuestionsp];
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
        var correctAnswer = quizData[language].correctAnswers[ecurrentQuestionsp];
        if (parseInt(selectedOption.value) === correctAnswer) {
            selectedOption.nextElementSibling.classList.add("correct");
            ecorrectCountsp++;
            
              emarkssp = emarkssp + 1; 
              localStorage.setItem('emarkssp', emarkssp);
            localStorage.setItem('ecorrectCountsp', ecorrectCountsp);
            
             // Increment the correct count
        } else {
            selectedOption.nextElementSibling.classList.add("incorrect");
            ewrongCountsp++;
            
              emarkssp = emarkssp - 0.25;
               localStorage.setItem('emarkssp', emarkssp);
            localStorage.setItem('ewrongCountsp', ewrongCountsp);
            
             // Increment the wrong count
        }
        
        
        
         // Store the current question, selected option, and correct answer
        var quizProgress = JSON.parse(localStorage.getItem('equizProgresssp')) || [];
        quizProgress[ecurrentQuestionsp] = {
            question: quizData[language].questions[ecurrentQuestionsp],
            selectedOption: selectedOption.value,
            correctAnswer: correctAnswer
        };
        localStorage.setItem('equizProgresssp', JSON.stringify(quizProgress));
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
           var eskipedsp = rtotalQuestions - (ecorrectCountsp + ewrongCountsp);
            localStorage.setItem('eskipedsp', eskipedsp);
        }
        
        
        // Initialize quiz data in localStorage
localStorage.setItem('questions', JSON.stringify(quizData.en.questions));
localStorage.setItem('correctAnswers', JSON.stringify(quizData.en.correctAnswers));    
localStorage.setItem('totalQuestions', quizData.en.questions.length);



