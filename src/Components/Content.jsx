import { useState } from "react";

import XPlayerName from "./XPlayerName";
import OPlayerName from "./OPlayerName";
import Reset from "./Reset";

import styles from "./Content.module.css";

const Content = ({
  setMark,
  winnerView,
  setXPlaying,
  setWinnerView,
  XScore,
  OScore,
  winClass,
}) => {
  const [playerName, setPlayerName] = useState({
    X: "X",
    O: "O",
    "Draw!": "Draw!",
  });

  return (
    <div className={styles.content}>
      <div className={styles.playerContainer}>
        <div className={`${styles.player} ${styles.borderRight}`}>
          <XPlayerName setPlayerName={setPlayerName} />
          <p>
            Score : <span> {XScore}</span>
          </p>
        </div>
        <div className={styles.player}>
          <OPlayerName setPlayerName={setPlayerName} />
          <p>
            Score : <span> {OScore}</span>
          </p>
        </div>
      </div>
      <div className={styles.winnerView}>
        <h3 className={styles[winClass]}>
          <span className={styles.winnerName}>{playerName[winnerView]}</span>
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
