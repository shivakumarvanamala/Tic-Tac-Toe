import { useState } from "react";

import styles from "./OPlayerName.module.css";

const OPlayerName = ({ setPlayerName }) => {
  const [inputValueO, setInputValueO] = useState("");

  const handleFormO = (eve) => {
    eve.preventDefault();

    setInputValueO(inputValueO);

    const removeEle = document.getElementsByClassName(styles.edit);

    removeEle[0].remove();
    console.log(removeEle);

    const checkValid = (str) => {
      if (/^[a-zA-Z0-9]+$/.test(str)) {
        setPlayerName((prevPlayerName) => ({
          ...prevPlayerName,
          O: str.toUpperCase(),
        }));
        // checks whether str is AlphaNumeric or not
        return str.toUpperCase();
      }
      return "PLAYER";
    };

    const span = document.createElement("span");
    span.innerHTML = checkValid(inputValueO.trim());
    span.className = styles.oInput;

    const form = document.getElementsByClassName(styles.form);

    form[0].replaceChild(span, form[0].firstChild);
  };

  const handleInputValueO = (eve) => {
    setInputValueO(eve.target.value);
  };

  return (
    <div className={styles.displayFlex}>
      <form onSubmit={(eve) => handleFormO(eve)} className={styles.form}>
        <input
          className={styles.oInput}
          type="text"
          placeholder="Player"
          maxLength="8"
          value={inputValueO}
          onChange={(eve) => handleInputValueO(eve)}
        />
        <img className={styles.edit} src="/edit-tool.png" alt="✏️" />
      </form>
      <span>&nbsp; O</span>
    </div>
  );
};

export default OPlayerName;
