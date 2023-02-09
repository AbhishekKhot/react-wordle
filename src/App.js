import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words";
import GameOver from "./components/GameOver";
export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onDelete = () => {
    if (currentAttempt.letterPos == 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currentAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found!!");
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessWord: true });
      return;
    }
    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessWord: false });
    }
  };

  const onSelectLetter = (keyVal) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      {/* this are the values which are accessiable to the all child components below the DOM tree */}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onDelete,
          onEnter,
          onSelectLetter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}
