import { useState } from "react";

import styles from "./XPlayerName.module.css";

const XPlayerName = (props) => {
  const propPlayerX = props.playerX;

  const [inputValueX, setInputValueX] = useState("");

  const handleFormX = (eve) => {
    eve.preventDefault();
    setInputValueX(inputValueX);

    const span = document.createElement("span");
    span.innerHTML = inputValueX + " - X";
    span.className = styles.xInput;
    const playerX = document.getElementsByClassName(propPlayerX);

    console.log(playerX);
    playerX[0].replaceChild(span, playerX[0].firstChild);
  };

  const handleInputX = (eve) => {
    setInputValueX(eve.target.value);
  };

  return (
    <div className={styles.displayFlex}>
      <form onSubmit={(eve) => handleFormX(eve)}>
        <input
          className={styles.xInput}
          type="text"
          placeholder="Player"
          maxLength="8"
          value={inputValueX}
          onChange={(eve) => handleInputX(eve)}
        />
      </form>
      <span>&nbsp;- X</span>
    </div>
  );
};

export default XPlayerName;
