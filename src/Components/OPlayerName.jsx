import { useState } from "react";

import styles from "./OPlayerName.module.css";

const OPlayerName = ({ setPlayerName }) => {
  const [inputValueO, setInputValueO] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormO = (eve) => {
    eve.preventDefault();

    setInputValueO(inputValueO);
    setIsReadOnly(true);
    setIsSubmitted(true);

    const removeEle = document.getElementsByClassName(styles.edit);

    removeEle[0].remove();

    const checkValid = (str) => {
      // checks whether str is AlphaNumeric or not
      if (/^[a-zA-Z0-9]+$/.test(str)) {
        setPlayerName((prevPlayerName) => ({
          ...prevPlayerName,
          O: str.toUpperCase(),
        }));
        return str.toUpperCase();
      }
      return "PLAYER";
    };

    // let inputEle = document.getElementsByClassName(styles.oInput);
    // inputEle.style.outline = "none";
    // inputEle.style.border = "none";
    // inputEle.value = checkValid(inputValueO.trim());
  };

  const handleInputValueO = (eve) => {
    setInputValueO(eve.target.value);
  };

  let classes = `${styles.oInput} ${isSubmitted ? styles.submitted : ""}`;

  console.log(classes);

  return (
    <div className={styles.displayFlex}>
      <form onSubmit={(eve) => handleFormO(eve)} className={styles.form}>
        <input
          className={classes}
          type="text"
          placeholder="Player"
          maxLength="8"
          spellCheck="false"
          readOnly={isReadOnly}
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
