
    const quizData = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        type: "multiple-choice",
      },
      {
        question: "Is the Earth round?",
        options: ["True", "False"],
        answer: "True",
        type: "true/false",
      },
      {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "7"],
        answer: "8",
        type: "multiple-choice",
      },
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 30;
    let timer;

    function startTimer() {
      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
        } else {
          clearInterval(timer);
          handleAnswerSubmission();
        }
      }, 1000);
    }

    function displayQuestion() {
      const questionData = quizData[currentQuestionIndex];
      document.getElementById("question-text").innerText = questionData.question;
      const optionsContainer = document.getElementById("options-container");
      optionsContainer.innerHTML = ''; // Clear previous options

      questionData.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.innerText = option;
        optionElement.classList.add("option-button");
        optionElement.onclick = () => handleAnswerSelection(option);
        optionsContainer.appendChild(optionElement);
      });

      document.getElementById("feedback-container").style.display = "none";
      startTimer();
    }

    function handleAnswerSelection(selectedAnswer) {
      const correctAnswer = quizData[currentQuestionIndex].answer;
      if (selectedAnswer === correctAnswer) {
        score++;
        showFeedback(true);
      } else {
        showFeedback(false);
      }
    }

    function showFeedback(isCorrect) {
      const feedbackText = isCorrect ? "Correct!" : "Incorrect. The correct answer was: " + quizData[currentQuestionIndex].answer;
      document.getElementById("feedback-text").innerText = feedbackText;
      document.getElementById("feedback-container").style.display = "block";
    }

    function handleAnswerSubmission() {
      clearInterval(timer);
      showFeedback(false);
    }

    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        displayQuestion();
        document.getElementById("feedback-container").style.display = "none";
        timeLeft = 30; // Reset the timer for the next question
      } else {
        showFinalScore();
      }
    }

    function showFinalScore() {
      document.getElementById("score-text").innerText = `Your score is: ${score} / ${quizData.length}`;
      document.getElementById("score-container").style.display = "block";
    }

    function retryQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      document.getElementById("score-container").style.display = "none";
      displayQuestion();
    }

    // Initialize the quiz
    displayQuestion();
