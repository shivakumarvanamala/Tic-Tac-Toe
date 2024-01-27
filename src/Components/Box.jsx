import styles from "./Box.module.css";

const Box = ({ mark, handleBoxClick, index }) => {
  const player = mark === "X" ? styles.boxX : styles.boxO;
  return (
    <div
      className={`${styles.box} ${player}`}
      onClick={() => {
        if (mark === null) {
          return handleBoxClick(index);
        }
      }}
      style={{ pointerEvents: mark !== null ? "none" : "auto" }}
    >
      {mark}
    </div>
  );
};
export default Box;
