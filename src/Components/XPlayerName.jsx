import { useState } from "react";

import styles from "./XPlayerName.module.css";

const XPlayerName = ({ setPlayerName }) => {
  const [inputValueX, setInputValueX] = useState("");

  const handleFormX = (eve) => {
    eve.preventDefault();

    setInputValueX(inputValueX);

    const removeEle = document.getElementsByClassName(styles.edit);

    removeEle[0].remove();
    console.log(removeEle);

    const checkValid = (str) => {
      // checks whether str is AlphaNumeric or not
      if (/^[a-zA-Z0-9]+$/.test(str)) {
        setPlayerName((prevPlayerName) => ({
          ...prevPlayerName,
          X: str.toUpperCase(),
        }));
        return str.toUpperCase();
      }
      return "PLAYER";
    };

    const span = document.createElement("span");
    span.innerHTML = checkValid(inputValueX.trim());
    span.className = styles.xInput;

    const form = document.getElementsByClassName(styles.form);

    form[0].replaceChild(span, form[0].firstChild);
  };

  const handleInputX = (eve) => {
    setInputValueX(eve.target.value);
  };

  return (
    <div className={styles.displayFlex}>
      <form onSubmit={(eve) => handleFormX(eve)} className={styles.form}>
        <input
          className={styles.xInput}
          type="text"
          placeholder="Player"
          maxLength="8"
          spellCheck="false"
          value={inputValueX}
          onChange={(eve) => handleInputX(eve)}
        />
        <img className={styles.edit} src="/edit-tool.png" alt="✏️" />
      </form>
      <span>&nbsp; X</span>
    </div>
  );
};

export default XPlayerName;
