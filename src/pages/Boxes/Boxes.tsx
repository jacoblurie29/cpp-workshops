import styles from "./Boxes.module.css";

const Boxes = () => {
  const handleAddBox = () => {
    // do something...
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to our site!</h1>
      <button onClick={handleAddBox}>Click me!</button>
    </div>
  );
};

export default Boxes;
