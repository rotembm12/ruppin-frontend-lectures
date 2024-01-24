const questions = [
  ["What is your age", "31"],
  ["What is your age", "31"],
  ["What is your age", "31"],
  ["What is your age", "31"],
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

// Do your thing
let stage = 0;
while (stage < questions.length) {
  const isCorrect = askQuestion(questions[stage]);
  if (isCorrect) {
    alert("Wow you did it. go to next stage");
    stage++;
  } else {
    alert("OOps your wrong. do it again");
  }
}
