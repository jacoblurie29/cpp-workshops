import { useState } from "react";
import styles from "./App.module.css";
import { faker } from "@faker-js/faker";
import FlightTable from "./FlightTable";

export interface Flight {
  flightNumber: number;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  flightDuration: number;
}

const App = () => {
  const [flights, setFlights] = useState<Flight[]>([] as Flight[]);

  const getFlight = () => {
    const newFlight: Flight = {
      flightNumber: faker.number.int({ min: 100, max: 999 }),
      origin: faker.location.country(),
      destination: faker.location.country(),
      departureTime: faker.date
        .anytime()
        .toString()
        .split(" ")
        .slice(0, 5)
        .join(" "),
      arrivalTime: faker.date
        .anytime()
        .toString()
        .split(" ")
        .slice(0, 5)
        .join(" "),
      flightDuration: faker.number.int({ min: 1, max: 30 }),
    };
    setFlights([...flights, newFlight]);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to our site!</h1>
      <button
        onClick={getFlight}
        style={{
          marginBottom: "30px",
          padding: "10px",
          fontFamily: "sans-serif",
          fontSize: "20px",
          fontWeight: "bold",
          background: "lightblue",
        }}
      >
        Click me to fly
      </button>
      <FlightTable flights={flights} />
    </div>
  );
};

export default App;
