import styles from "./Box.module.css";

const Box = ({ mark, handleBoxClick, index }) => {
  const player = mark === "X" ? styles.boxX : styles.boxO;
  return (
    <div
      className={`${styles.box} ${player}`}
      onClick={() => {
        // eve.target.className = `${styles.box} ${player} ${styles.clicked}`;
        return handleBoxClick(index);
      }}
    >
      {mark}
    </div>
  );
};
export default Box;
