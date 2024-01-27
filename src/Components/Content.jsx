import { useState, useEffect } from "react";

import styles from "./Content.module.css";

import Reset from "./Reset";

import winnerCheck from "./winnerCheck";

const Content = ({ mark, setMark, winnerView, setWinnerView, setXPlaying }) => {
  const winner = winnerCheck(mark);

  const [XScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);

  const [winClass, setWinClass] = useState("");

  useEffect(() => {
    if (winner === "X") {
      setXScore((XScore) => XScore + 1);
      setWinnerView("X");
      setWinClass("winX");
    } else if (winner === "O") {
      setOScore((OScore) => OScore + 1);
      setWinnerView("O");
      setWinClass("winO");
    } else if (winner === "draw") {
      setWinnerView("Draw!");
      setWinClass("winDraw");
    }
  }, [winner, winClass]);

  return (
    <div className={styles.content}>
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          <h3 className={styles.playerX}>Player X</h3>
          <p>
            Score: <span>{XScore}</span>
          </p>
        </div>
        <div className={styles.player}>
          <h3 className={styles.playerO}>Player O</h3>
          <p>
            Score: <span>{OScore}</span>
          </p>
        </div>
      </div>
      <div>
        <h3 className={`${styles.winnerView} ${styles[winClass]}`}>
          <span>&nbsp;{winnerView}</span>
          <span>{(winnerView === "X" || winnerView === "O") && " wins!"}</span>
        </h3>
      </div>
      <Reset
        setMark={setMark}
        setWinnerView={setWinnerView}
        setXPlaying={setXPlaying}
      />
    </div>
  );
};
export default Content;
