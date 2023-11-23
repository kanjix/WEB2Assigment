const video = document.getElementById('fullscreen-video');
        const quizContainer = document.getElementById('quiz-container');

        // Function to toggle full-screen mode
        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                video.requestFullscreen().catch(err => {
                    alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
        }

        // Toggle full-screen mode on video click
        video.addEventListener('click', () => {
            toggleFullScreen();
        });

       const video = document.getElementById('fullscreen-video');
        const quizContainer = document.getElementById('quiz-container');

        // Function to toggle full-screen mode
        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                video.requestFullscreen().catch(err => {
                    alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
        }

        // Toggle full-screen mode on video click
        video.addEventListener('click', () => {
            toggleFullScreen();
        });




        const startBtn = document.getElementById('startBtn');
        const questions = [
            {
                question: "Which clothing item is known as 'denim'?",
                options: ["Shirt", "Jeans", "Sweater"],
                correctAnswer: "Jeans"
            },
            {
                question: "What is a 'tuxedo' commonly worn for?",
                options: ["Weddings", "Swimming", "Running"],
                correctAnswer: "Weddings"
            },
            {
                question: "What type of clothing is a 'beret'?",
                options: ["Hat", "Shoe", "Glove"],
                correctAnswer: "Hat"
            },
            {
                question: "Which clothing brand uses the logo of a crocodile?",
                options: ["Nike", "Adidas", "Lacoste"],
                correctAnswer: "Lacoste"
            }
            // Add more questions...
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        startBtn.addEventListener('click', startQuiz);
        function startQuiz() {
            quizContainer.style.display = 'block';
            displayQuestion();
        }

        function displayQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            document.getElementById("question").textContent = currentQuestion.question;

            const optionsContainer = document.getElementById("options-container");
            optionsContainer.innerHTML = "";

            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(selectedAnswer) {
            const currentQuestion = questions[currentQuestionIndex];
            if (selectedAnswer === currentQuestion.correctAnswer) {
                score++;
            }
            nextQuestion();
        }

        function nextQuestion() {
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                displayResult();
            }
        }

        function displayResult() {
            const resultElement = document.getElementById("result");
            resultElement.textContent = `Your score is: ${score}/${questions.length}`;

            if (score === questions.length) {
                resultElement.textContent += " Excellent! You got all the questions right.";
            } else if (score >= Math.floor(questions.length / 2)) {
                resultElement.textContent += " Good job! You answered most of the questions correctly.";
            } else {
                resultElement.textContent += " Keep practicing. You can do better!";
            }
        }