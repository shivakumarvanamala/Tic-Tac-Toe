import styles from "./Box.module.css";

const Box = ({ mark, handleBoxClick, index, winner }) => {
  const player = mark === "X" ? styles.boxX : styles.boxO;
  const togglePointerEvents = mark != null || winner === "X" || winner === "O";

  return (
    <div
      className={`${styles.box} ${player}`}
      onClick={() => {
        if (mark === null) {
          return handleBoxClick(index);
        }
      }}
      style={{ pointerEvents: togglePointerEvents ? "none" : "auto" }}
    >
      {mark}
    </div>
  );
};
export default Box;
