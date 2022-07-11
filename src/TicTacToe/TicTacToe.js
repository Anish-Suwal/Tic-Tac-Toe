import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [boxes, setBoxes] = useState(Array(9).fill(""));

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log("checkWinner");

   

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(boxes[a] === boxes[b] && boxes[b] === boxes[c] && boxes[a] !== ""){
        console.log("checkWinner",boxes);
        alert("win");

      }
      return alert;
    }
  };

  const handleClick = (num) => {
    if (boxes[num] !== "") {
      alert("already clicked");
      return;
    }
    let squares = [...boxes];
    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }
    setBoxes(squares);
    console.log(squares);
  };
  checkWinner();

  const Box = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{boxes[num]}</td>;
  };
  return (
    <div className="container">
      <table>
        Turn:{turn}
        <tbody>
          <tr>
            <Box num={0} />
            <Box num={1} />
            <Box num={2} />
          </tr>
          <tr>
            <Box num={3} />
            <Box num={4} />
            <Box num={5} />
          </tr>
          <tr>
            <Box num={6} />
            <Box num={7} />
            <Box num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
