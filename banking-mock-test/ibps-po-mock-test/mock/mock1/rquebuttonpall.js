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

    const currentButton = buttons[rcurrentQuestionsp];
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
  rcurrentQuestionsp = 0;
          rcurrentQuestionsp = rcurrentQuestionsp + r;
          
                if (rcurrentQuestionsp >= quizData.en.questions.length) {
                rcurrentQuestionsp = 0;
            }
            
            changeLanguage();
            checkedopn();
            /* nextbtton(rcurrentQuestionsp); */
        }

// Handle clearing selected answer
function clearresponsek() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) selected.checked = false;

    if (rcurrentQuestionsp >= 0 && rcurrentQuestionsp < buttons.length) {
        buttons[rcurrentQuestionsp].style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
    }
}

// Handle marking question and moving to next
function marknextPrev() {
    if (rcurrentQuestionsp >= 0 && rcurrentQuestionsp < buttons.length) {
        buttons[rcurrentQuestionsp].style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
        marked++;
    }

    saveAndNext(); // Call to your save function
    document.getElementById('stic-marked').innerHTML = marked;
}