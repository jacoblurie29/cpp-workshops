import styles from "./App.module.css";
import { faker } from "@faker-js/faker";
import {useState, useEffect} from 'react'
import FlightTable from "./components/FlightTable";

export interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  flightDuration: number;
}

const App = () => {

  const [flights, setFlights]= useState <Flight[]>([]);

  useEffect(() => {
      
    flights.sort((a,b) => {
      const compareA = a.departureTime.getTime();

      const compareB = b.departureTime.getTime();

      return compareA - compareB;
    });

  }, [flights]);
  

  const generateFlight = (): Flight => {
    
    const departure: Date = faker.date.soon();

    const newFlight: Flight = {
      flightNumber: faker.string.alphanumeric(6),
      origin: faker.string.alpha(3),
      destination:  faker.string.alpha(3),
      departureTime: departure,
      arrivalTime: faker.date.soon({days:10, refDate: departure}),
      flightDuration : faker.number.int({ min: 1, max: 8 }),
    };

    setFlights([...flights, newFlight]);
    return newFlight;
  };

  
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.header}>Flight Table</div>
        <h1></h1>
        <button onClick={generateFlight}>Generate Flight</button>
        <FlightTable flights = {flights} />
      </div>
    </>
  );
}
  

export default App;