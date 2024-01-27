import styles from "./Content.module.css";

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
