import styles from "./Content.module.css";

import XPlayerName from "./XPlayerName";
import OPlayerName from "./OPlayerName";
import Reset from "./Reset";

const Content = ({
  setMark,
  winnerView,
  setXPlaying,
  setWinnerView,
  XScore,
  OScore,
  winClass,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.playerContainer}>
        <div className={`${styles.player} ${styles.borderRight}`}>
          <XPlayerName playerX={styles.playerX} />
          <p>
            Score: <span>{XScore}</span>
          </p>
        </div>
        <div className={`${styles.player}`}>
          <OPlayerName playerO={styles.playerO} />
          <p>
            Score: <span>{OScore}</span>
          </p>
        </div>
      </div>
      <div className={styles.winnerView}>
        <h3 className={styles[winClass]}>
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
