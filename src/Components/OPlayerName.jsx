import { useState } from "react";

import styles from "./OPlayerName.module.css";

const OPlayerName = () => {
  const [inputValueO, setInputValueO] = useState("");

  const handleFormO = (eve) => {
    eve.preventDefault();
    setInputValueO(inputValueO);

    const checkValid = (str) => {
      return /^[a-zA-Z0-9]+$/.test(str) ? str.toUpperCase() : "PLAYER";
    };

    const span = document.createElement("span");
    span.innerHTML = checkValid(inputValueO.trim());
    span.className = styles.oInput;

    const form = document.getElementsByClassName(styles.form);

    // console.log(form);
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
      </form>
      <span>&nbsp;- O</span>
    </div>
  );
};

export default OPlayerName;
