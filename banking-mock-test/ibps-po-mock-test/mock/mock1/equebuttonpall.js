// Store buttons in an array for easy access by index
const buttons = [];
for (let i = 1; i <= 30; i++) {
    buttons.push(document.getElementById(`sprite-butts${i}`)); // Use backticks and template literal
}



// Main function to handle button style updates for the current question
function checkedopn() {
    const radioButtons = document.querySelectorAll('input[name="option"]');
    const selectedOption = document.querySelector('input[name="option"]:checked');

    // Remove background color from all buttons (optional)
    // buttons.forEach(button => button.style = ""); // Uncomment if needed

    const currentButton = buttons[ecurrentQuestionsp];
    currentButton.style = "background-position: 0px -136px; color: rgb(255, 255, 255);";

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            if (radio.checked) {
                currentButton.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                ansered++;
            }
        });
    });
}

    function nextbtton(r) {
  ecurrentQuestionsp = 0;
          ecurrentQuestionsp = ecurrentQuestionsp + r;
          
                if (ecurrentQuestionsp >= quizData.en.questions.length) {
                ecurrentQuestionsp = 0;
            }
            
            changeLanguage();
            checkedopn();
            /* nextbtton(ecurrentQuestionsp); */
        }

// Handle clearing selected answer
function clearresponsek() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) selected.checked = false;

    if (ecurrentQuestionsp >= 0 && ecurrentQuestionsp < buttons.length) {
        buttons[ecurrentQuestionsp].style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
    }
}

// Handle marking question and moving to next
function marknextPrev() {
    if (ecurrentQuestionsp >= 0 && ecurrentQuestionsp < buttons.length) {
        buttons[ecurrentQuestionsp].style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
        marked++;
    }

    saveAndNext(); // Call to your save function
    document.getElementById('stic-marked').innerHTML = marked;
}