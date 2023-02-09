import { useState } from "react";
import { boardDefault } from "../Words";
import Letter from "./Letter";

const Board = () => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="board">
      <div className="row">
        <Letter letterPos={0} attemptVal={0}></Letter>
        <Letter letterPos={1} attemptVal={0}></Letter>
        <Letter letterPos={2} attemptVal={0}></Letter>
        <Letter letterPos={3} attemptVal={0}></Letter>
        <Letter letterPos={4} attemptVal={0}></Letter>
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={1}></Letter>
        <Letter letterPos={1} attemptVal={1}></Letter>
        <Letter letterPos={2} attemptVal={1}></Letter>
        <Letter letterPos={3} attemptVal={1}></Letter>
        <Letter letterPos={4} attemptVal={1}></Letter>
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={2}></Letter>
        <Letter letterPos={1} attemptVal={2}></Letter>
        <Letter letterPos={2} attemptVal={2}></Letter>
        <Letter letterPos={3} attemptVal={2}></Letter>
        <Letter letterPos={4} attemptVal={2}></Letter>
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={3}></Letter>
        <Letter letterPos={1} attemptVal={3}></Letter>
        <Letter letterPos={2} attemptVal={3}></Letter>
        <Letter letterPos={3} attemptVal={3}></Letter>
        <Letter letterPos={4} attemptVal={3}></Letter>
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={4}></Letter>
        <Letter letterPos={1} attemptVal={4}></Letter>
        <Letter letterPos={2} attemptVal={4}></Letter>
        <Letter letterPos={3} attemptVal={4}></Letter>
        <Letter letterPos={4} attemptVal={4}></Letter>
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={5}></Letter>
        <Letter letterPos={1} attemptVal={5}></Letter>
        <Letter letterPos={2} attemptVal={5}></Letter>
        <Letter letterPos={3} attemptVal={5}></Letter>
        <Letter letterPos={4} attemptVal={5}></Letter>
      </div>
    </div>
  );
};

export default Board;
