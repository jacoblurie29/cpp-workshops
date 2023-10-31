import styles from "./App.module.css";
import { type Flight } from "./types";
import FlightTable from "./components/FlightTable";
import React, { useEffect } from "react";

const App = () => {
  const [flights, setFlights] = React.useState<Flight[]>([]);

  const sortedFlights = flights.sort((a, b) => {
    const aTime = a.departureTime.split(":");
    const bTime = b.departureTime.split(":");
    if (aTime[0] === bTime[0]) {
      return parseInt(aTime[1]) - parseInt(bTime[1]);
    }
    return parseInt(aTime[0]) - parseInt(bTime[0]);
  });

  useEffect(() => {
    setFlights(sortedFlights);
  }, [flights]);

  const generateFlightCode = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateAirport = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 3; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return hours + ":" + minutes;
  };

  const createFlight = () => {
    const flightCode = generateFlightCode();
    const airport = generateAirport();
    const departureTime = generateTime();
    const arrivalTime = generateTime();
    setFlights([
      ...flights,
      { flightCode, airport, departureTime, arrivalTime },
    ]);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to our site!</h1>
      <button
        onClick={() => {
          createFlight();
        }}
      >
        Click me
      </button>
      <FlightTable flights={flights} />
    </div>
  );
};

export default App;
