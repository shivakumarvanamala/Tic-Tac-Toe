import Box from "./Box";

import styles from "./Container.module.css";

const Container = ({ mark, handleBoxClick, winner }) => {
  return (
    <div className={styles.container}>
      {mark.map((value, index) => (
        <Box
          mark={value}
          key={index}
          handleBoxClick={handleBoxClick}
          index={index}
          winner={winner}
        />
      ))}
    </div>
  );
};
export default Container;
