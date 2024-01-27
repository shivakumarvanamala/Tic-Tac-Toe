import { useState } from "react";

import styles from "./OPlayerName.module.css";

const OPlayerName = (props) => {
  const propPlayerO = props.playerO;

  const [inputValueO, setInputValueO] = useState("");

  const handleFormO = (eve) => {
    eve.preventDefault();
    setInputValueO(inputValueO);

    const span = document.createElement("span");
    span.innerHTML = inputValueO + " - O";
    const playerO = document.getElementsByClassName(propPlayerO);

    playerO[0].replaceChild(span, playerO[0].firstChild);
  };

  const handleInputValueO = (eve) => {
    setInputValueO(eve.target.value);
  };

  return (
    <div className={styles.displayFlex}>
      <form onSubmit={(eve) => handleFormO(eve)}>
        <input
          className={styles.oInput}
          type="text"
          placeholder="Player"
          maxLength="8"
          value={inputValueO}
          onChange={(eve) => handleInputValueO(eve)}
        />
      </form>
      <span>&nbsp;- O</span>
    </div>
  );
};

export default OPlayerName;
