import { useState } from "react";

import Container from "./Container";
import Heading from "./Heading";
import Content from "./Content";

import winnerCheck from "./winnerCheck";

function TicTacToe() {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [winnerView, setWinView] = useState("");

  const handleBoxClick = (boxIdx) => {
    const updatedMark = mark.map((value, index) => {
      if (value === null && !winnerCheck(mark)) {
        if (index === boxIdx) {
          return xPlaying ? "X" : "O";
        }
        setXPlaying(!xPlaying);
        return value;
      }
      return value;
    });
    setMark(updatedMark);
  };
  return (
    <>
      <Heading />
      <div className="container">
        <Container mark={mark} handleBoxClick={handleBoxClick} />
        <Content
          mark={mark}
          setMark={setMark}
          winnerView={winnerView}
          setWinnerView={setWinView}
          setXPlaying={setXPlaying}
        />
      </div>
    </>
  );
}

export default TicTacToe;
