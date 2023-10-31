import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { faker } from "@faker-js/faker";
import FlightTable from "./components/FlightTable/FlightTable";

export interface Flight {
  // ... fields here
  flightNumber: string;
  origin: string;
  destination: string,
  departureTime: string,
  arrivalTime: string,
  flightDuration: number
}

const App = () => {
  // state for flights should go here
  const [flights, setFlights] = useState<Flight[]>([]);
  useEffect(() => {
    const newFlights = flights.sort((a: Flight, b: Flight) => ( a.flightDuration - b.flightDuration ));
    console.log(newFlights);
    setFlights(newFlights);
  }, flights)

  const handleAddFlight = () => {
    let newFlight: Flight = {
      flightNumber: faker.string.alphanumeric(6),
      origin: faker.string.alphanumeric(3),
      destination: faker.string.alphanumeric(3),
      departureTime: faker.date.anytime().toISOString().split("T")[1],
      arrivalTime: faker.date.anytime().toISOString().split("T")[1],
      flightDuration: faker.number.int({ min: 1, max:8 }) 
    }
    setFlights([...flights, newFlight]);
    
    // create a new flight with faker
    // add the new flight to the list of flights
    // set the new list of flights
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to Miracle Flights!</h1>
      <button onClick={handleAddFlight}>Add new flight!</button>
      {
        <FlightTable flights = {flights}/>
      /* Put the table here and pass in the flights */}
    </div>
  );
};

export default App;
