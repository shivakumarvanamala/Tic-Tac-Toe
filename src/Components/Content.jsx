import { useState, useEffect } from "react";

import styles from "./Content.module.css";

import Reset from "./Reset";

import winnerCheck from "./winnerCheck";

const Content = ({ mark, setMark, winnerView, setWinnerView, setXPlaying }) => {
  const winner = winnerCheck(mark);

  const [XScore, setXScore] = useState(0);
  const [OScore, setOScore] = useState(0);

  useEffect(() => {
    if (winner === "X") {
      setXScore((XScore) => XScore + 1);
      setWinnerView("X Wins!");
    } else if (winner === "O") {
      setOScore((OScore) => OScore + 1);
      setWinnerView("O Wins!");
    }
    // else if (winner === -1) {
    //   setWinnerView("Draw!");
    // }
  }, [winner]);

  return (
    <div className={styles.content}>
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          <h3>Player X</h3>
          <p>
            Score: <span>{XScore}</span>
          </p>
        </div>
        <div className={styles.player}>
          <h3>Player O</h3>
          <p>
            Score: <span>{OScore}</span>
          </p>
        </div>
      </div>
      <div>
        <h3 className={styles.winnerView}>{winnerView}</h3>
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
