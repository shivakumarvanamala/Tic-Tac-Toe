import { useState } from "react";

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
  const [inputO, setInputO] = useState("");
  const [inputX, setInputX] = useState("");

  const handleFormX = (eve) => {
    eve.preventDefault();
    setInputX(inputX);

    // console.log(eve.target.style.display);
    // eve.style.display = "none";

    const span = document.createElement("span");
    span.innerHTML = inputX;
    span.className = styles.xInput;
    const playerX = document.getElementsByClassName(styles.playerX);

    playerX[0].replaceChild(span, playerX[0].firstChild);

    // playerX[0].removeChild(playerX[0].firstChild);
    // playerX[0].firstElementChild(span);
  };

  const handleFormO = (eve) => {
    eve.preventDefault();
    setInputO(inputO);

    // console.log(eve.target.style.display);
    // eve.style.display = "none";

    const span = document.createElement("span");
    span.innerHTML = inputO;
    const playerO = document.getElementsByClassName(styles.playerO);

    playerO[0].replaceChild(span, playerO[0].firstChild);

    // playerO[0].removeChild(playerO[0].firstChild);
    // playerO[0].firstElementChild(span);
  };

  const handleInputX = (eve) => {
    // console.log(eve.target.value);
    setInputX(eve.target.value);
  };
  const handleInputO = (eve) => {
    // console.log(eve.target.value);
    setInputO(eve.target.value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.playerContainer}>
        <div className={`${styles.player} ${styles.borderRight}`}>
          <h3 className={styles.playerX}>
            <form onSubmit={(eve) => handleFormX(eve)}>
              <input
                className={styles.xInput}
                type="text"
                placeholder="Player"
                maxlength="8"
                value={inputX}
                onChange={(eve) => handleInputX(eve)}
              />
            </form>
            &nbsp;- X
          </h3>
          <p>
            Score: <span>{XScore}</span>
          </p>
        </div>
        <div className={styles.player}>
          <h3 className={styles.playerO}>
            <form onSubmit={(eve) => handleFormO(eve)}>
              <input
                className={styles.oInput}
                type="text"
                placeholder="Player"
                maxlength="8"
                value={inputO}
                onChange={(eve) => handleInputO(eve)}
              />
            </form>
            &nbsp;- O
          </h3>
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
