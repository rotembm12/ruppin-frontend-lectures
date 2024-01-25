function startQuiz() {
  const questions = [
    ["What is your age?", "31"],
    ["What is your name?", "rotem"],
    ["What do you do for living?", "building web apps"],
    ["Where do u live?", "Hadera"],
  ];

  function askQuestion(question) {
    // ask the question and save the answer
    const userAnswered = prompt(question[0]);

    // check if the answer is right
    //   if (userAnswered === question[1]) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    return userAnswered === question[1]; // true or false
  }

  let stage = 0;
  while (stage < questions.length) {
    const isCorrect = askQuestion(questions[stage]);
    if (isCorrect) {
      alert("Correct! Next question ➡️");
      stage++;
    } else {
      alert(`
        Ops your wrong 😭 
        Try again
      `);
    }
  }
}

const startQuizButton = document.getElementById("start-quiz");
startQuizButton.addEventListener("click", startQuiz);
