import styles from "./App.module.css";
import FlightTable from "./components/FlightTable/FlightTable";
import { faker } from "@faker-js/faker";
import React from "react";
import Button from "@mui/material/Button";

export interface Flight {
  // ... fields here
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  flightDuration: number;
}

const App = () => {
  // state for flights should go here
  const [flightList, setFlightList] = React.useState<Flight[]>([]);

  function formatAMPM(date: Date): string {
    let hours = date.getHours();
    let minutes = String(date.getMinutes());
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function generateFlight(): Flight {
    const newFlight: Flight = {
      flightNumber: faker.airline.flightNumber(),
      origin: String(faker.airline.airport().iataCode),
      destination: String(faker.airline.airport().iataCode),
      departureTime: formatAMPM(faker.date.anytime()),
      arrivalTime: formatAMPM(faker.date.anytime()),
      flightDuration: faker.number.int({ min: 1, max: 8 }),
    };
    return newFlight;
  }

  const handleAddFlight = () => {
    // create a new flight with faker
    const newFlight = generateFlight();
    // add the new flight to the list of flights
    const newList = [...flightList, newFlight];
    // set the new list of flights
    newList.sort((flightA, flightB) =>
      flightA.origin.localeCompare(flightB.origin),
    );
    setFlightList(newList);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to Miracle Flights!</h1>
      <Button
        onClick={handleAddFlight}
        variant="contained"
        sx={{ marginBottom: 2 }}
      >
        Add new flight!
      </Button>
      {/* Put the table here and pass in the flights */}
      <FlightTable flights={flightList} />
    </div>
  );
};

export default App;
