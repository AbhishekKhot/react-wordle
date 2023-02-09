import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, currentAttempt, correctWord, setGameOver } =
    useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessWord ? "You correctly guessed" : "You failed"}</h3>
      <h1>Correct word:{correctWord}</h1>
      {gameOver.guessWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;
