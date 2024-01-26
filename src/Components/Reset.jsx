import styles from "./Reset.module.css";

function Reset({ setMark, setWinnerView, setXPlaying }) {
  const handleReset = () => {
    setMark(Array(9).fill(null));
    setWinnerView("");
    setXPlaying(true);
  };

  return (
    <>
      <button className={styles.resetBtn} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
export default Reset;
