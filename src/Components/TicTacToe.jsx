import { useState, useEffect } from "react";

import Container from "./Container";
import Heading from "./Heading";
import Content from "./Content";

import winnerCheck from "./winnerCheck";

function TicTacToe() {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [winnerView, setWinnerView] = useState("");

  const [XScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);

  const [winClass, setWinClass] = useState("");

  const winner = winnerCheck(mark);

  useEffect(() => {
    if (winner === "X") {
      setXScore((XScore) => XScore + 1);
      setWinnerView(() => "X");
      setWinClass(() => "winX");
    } else if (winner === "O") {
      setOScore((OScore) => OScore + 1);
      setWinnerView(() => "O");
      setWinClass("winO");
    } else if (winner === "draw") {
      setWinnerView(() => "Draw!");
      setWinClass(() => "winDraw");
    }
  }, [winner]);

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
      <div className="wrapper">
        <Container
          mark={mark}
          handleBoxClick={handleBoxClick}
          winner={winner}
        />
        <Content
          mark={mark}
          setMark={setMark}
          winnerView={winnerView}
          setWinnerView={setWinnerView}
          setXPlaying={setXPlaying}
          XScore={XScore}
          OScore={OScore}
          winClass={winClass}
        />
      </div>
    </>
  );
}

export default TicTacToe;
