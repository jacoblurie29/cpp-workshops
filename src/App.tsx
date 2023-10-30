import styles from "./App.module.css";

export interface Flight {
  // ... fields here
}

const App = () => {
  // state for flights should go here

  const handleAddFlight = () => {
    // create a new flight with faker
    // add the new flight to the list of flights
    // set the new list of flights
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to Miracle Flights!</h1>
      <button onClick={handleAddFlight}>Add new flight!</button>
      {/* Put the table here and pass in the flights */}
    </div>
  );
};

export default App;
