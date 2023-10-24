import styles from "./App.module.css";

const App = () => (
  <div className={styles.mainContainer}>
    <h1 className={styles.header}>Welcome to our site!</h1>
    <div className={styles.cardContainer}>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 1
      </div>
      <div className={styles.card} style={{ backgroundColor: "#395033" }}>
        Card 2
      </div>
      <div className={styles.card} style={{ backgroundColor: "#bdd5ea" }}>
        Card 3
      </div>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 4
      </div>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 5
      </div>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 6
      </div>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 7
      </div>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 8
      </div>
      <div className={styles.card} style={{ backgroundColor: "#BBBBBB" }}>
        Card 9
      </div>
    </div>
  </div>
);

export default App;
