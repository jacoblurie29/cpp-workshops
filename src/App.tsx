import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { faker } from "@faker-js/faker";
import FlightTable from "./FlightTable";


export interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  flightDuration: number;

}


const App = () => {

  const [flightList, setFlightList] = useState([] as Flight[]);

  useEffect(() => {
    setFlightList(flightList.sort((flightA, flightB) => {
      return flightA.flightDuration - flightB.flightDuration;
    }))
  }, [flightList])

  const generateRandomTime = (): string => {
    const hours: number = faker.number.int({ min: 0, max: 23 });
    const minutes: number = faker.number.int({ min: 0, max: 59 });
    const split: string = faker.date.anytime().toString().split(" ")[4];
    return split;
  }

  const getRandomFlight = (): Flight => {
    const newFlight: Flight = {
      flightNumber: faker.string.alphanumeric(3),
      origin: faker.string.alphanumeric(3),
      destination: faker.string.alphanumeric(3),
      departureTime: generateRandomTime(),
      arrivalTime: generateRandomTime(),
      flightDuration: faker.number.int({ min: 1, max: 8 }),

    }

    return newFlight;
  }

  const handleAddFlight = () => {
    const flight: Flight = getRandomFlight();
    setFlightList([...flightList, flight]);
  }


  return (
    <div>
      <h1>
        FlightTable
      </h1>
      <button onClick={handleAddFlight}>Click here!</button>
      <FlightTable flightList={flightList} />
    </div>)




};





export default App;
