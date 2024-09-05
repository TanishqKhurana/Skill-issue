let answers = {}; // Object to store answers
let totalQuestions = 10; // Total number of questions
let currentQuestion = 1; // Tracks the current question number

function recordAnswer(questionId, answer) {
  // Store the answer in the answers object
  answers[questionId] = answer;

  // Hide all questions
  const questions = document.querySelectorAll('.question');
  questions.forEach((question) => question.style.display = 'none');

  // Find the next question and show it
  const nextQuestion = document.getElementById(`question${currentQuestion + 1}`);
  if (nextQuestion) {
    nextQuestion.style.display = 'block';
    currentQuestion++;
    updateLoadingBar();
  } else {
    // If there are no more questions, show the final submit button
    document.getElementById('submitButton').style.display = 'block';
    // Ensure loading bar is 100% filled
    document.getElementById('loadingBar').style.width = '100%';
  }
}

function updateLoadingBar() {
  const progress = (currentQuestion - 1) / totalQuestions * 100;
  document.getElementById('loadingBar').style.width = `${progress}%`;
}

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert('Results submitted, your Education page will be designed to suit your results');
  });

  const toggleElement = document.querySelector('.navbar')

    toggleElement.addEventListener('click', () => {
        toggleElement.classList.toggle('active')
    })
    gsap.registerPlugin(ScrollTrigger);

    let lastScrollTop = 0;
    const header = document.querySelector('header');

    // Create a ScrollTrigger instance to track scrolling
    ScrollTrigger.create({
        onUpdate: self => {
            let scrollTop = self.scroll();

            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide the header
                gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.out' });
            } else {
                // Scrolling up - show the header
                gsap.to(header, { y: '0%', duration: 0.3, ease: 'power2.out' });
            }

            lastScrollTop = scrollTop;
        }
    });