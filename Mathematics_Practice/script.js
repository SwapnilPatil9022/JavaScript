document.addEventListener("DOMContentLoaded", () => {
  const problemElement = document.getElementById("problem");
  const answerInput = document.getElementById("answer");
  const checkBtn = document.getElementById("checkBtn");
  const nextBtn = document.getElementById("nextBtn");
  const resultElement = document.getElementById("result");

  let num1, num2, answer;

  function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 * num2;
    problemElement.textContent = `${num1} x ${num2} = `;
    answerInput.value = "";
    resultElement.textContent = "";
  }

  generateProblem();

  checkBtn.addEventListener("click", () => {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === answer) {
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect. Try again!";
    }
  });

  nextBtn.addEventListener("click", generateProblem);
});
