import Box from "./Box";

import styles from "./Container.module.css";

const Container = ({ mark, handleBoxClick }) => {
  return (
    <div className={styles.container}>
      {mark.map((value, index) => (
        <Box
          mark={value}
          key={index}
          handleBoxClick={handleBoxClick}
          index={index}
        />
      ))}
    </div>
  );
};
export default Container;
