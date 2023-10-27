import styles from "./Weather.module.css";

const Weather = () => {
  const getWeather = () => {
    // do something...
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Your weather!</h1>
      <button onClick={getWeather}>Click me!</button>
    </div>
  );
};

export default Weather;
