import React from "react";

export function QuizGame() {
  const quiz = quizzes[0];

  function handleClick(answerIndex) {
    alert(answerIndex === quiz.indexOfRightAnswer ? "the answer is correct" : "the answer is wrong - you are stupid")
  }

  return (
    <div>
      <div>{quiz.question}</div>
      {quiz.answers.map((a, index) => (
        <li key={index} onClick={() => handleClick(index)}>{a}</li>
      ))}
    </div>
  );
}

const quizzes = [
  {
    question: "What kind of language is JavaScript?",
    answers: [
      "Strongly and statically typed",
      "Strongly and dynamically typed",
      "Weakly and statically typed",
      "Weakly and dynamically typed",
    ],
    indexOfRightAnswer: 3,
  },
  {
    question:
      "In JavaScript, what is the result of the following?\n\n+(!![]+!![]+!![]+!![]+[]+(!![]+!![]))",
    answers: ["Compilation exception", "Runtime exception", "42", "'42'"],
    indexOfRightAnswer: 2,
  },
  {
    question:
      "In JavaScript, what is the result of the following?\n\n[3,18,1,2].sort()\n",
    answers: [
      "[1, 2, 3, 18]",
      "[1, 18, 2, 3]",
      "[18, 1, 2, 3]",
      "Runtime exception",
    ],
    indexOfRightAnswer: 1,
  },
  {
    question:
      "In JavaScript, what is the result  of the following?\n\nfalse + true?",
    answers: ["false", "true", "'falsetrue'", "1"],
    indexOfRightAnswer: 3,
  },
  {
    question: "What is Babel mainly used for?",
    answers: [
      "To transpile code into valid JS code",
      "To bundle together the code of different JS files",
      "To download third-party dependencies",
      "To run test cases",
    ],
    indexOfRightAnswer: 0,
  },
];
