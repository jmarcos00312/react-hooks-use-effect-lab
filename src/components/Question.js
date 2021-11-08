import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    //if state is greater than or equal than zero
    if (timeRemaining >= 0) {
      //count down the timer remaining and set it to timerZero
      const timerZero = setTimeout(() => {
        //count down
        setTimeRemaining(timeRemaining => timeRemaining - 1)
        //every 1 second
      }, 1000)
      //cleanup anonymous function
      return () => clearTimeout(timerZero)

    } else {
      //call the onAnswered prop and setting the value to false
      onAnswered(false)
    }
  })


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }
  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
