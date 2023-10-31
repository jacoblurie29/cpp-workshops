import FlightTable from "./FlightTable";
import { faker } from "@faker-js/faker";
import { useState } from "react";

export interface Flight {
  flightNumber: string;
  departure: string;
  destination: string;
  flightDuration: string;
  departureTime: string;
  arrivalTime: string;
}

const App = () => {
  const [flightList, setFlightList] = useState([] as Flight[]);

  const generateRandomTime = (): string => {
    const hours: number = faker.datatype.number({ min: 0, max: 23 });
    const minutes: number = faker.datatype.number({ min: 0, max: 59 });
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0",
    )}:00`;
  };

  const calculateDuration = (start: string, end: string): string => {
    const [startHours, startMinutes] = start.split(":").map(Number);
    const [endHours, endMinutes] = end.split(":").map(Number);

    let durationMinutes = endMinutes - startMinutes;
    let durationHours = endHours - startHours;

    if (durationMinutes < 0) {
      durationMinutes += 60;
      durationHours -= 1;
    }

    if (durationHours < 0) {
      durationHours += 24;
    }

    return `${String(durationHours).padStart(2, "0")}:${String(
      durationMinutes,
    ).padStart(2, "0")}`;
  };

  const getRandomFlight = (): Flight => {
    const departureTime = generateRandomTime();
    const arrivalTime = generateRandomTime();
    const flightDuration = calculateDuration(departureTime, arrivalTime);

    const newFlight: Flight = {
      flightNumber:
        faker.datatype.string(3) + faker.datatype.number({ min: 1, max: 9 }),
      departure: faker.address.cityName(),
      destination: faker.address.cityName(),
      departureTime,
      arrivalTime,
      flightDuration,
    };

    return newFlight;
  };

  const handleAddFlight = () => {
    const flight: Flight = getRandomFlight();
    setFlightList([...flightList, flight]);
  };

  return (
    <div>
      <div className="header-container">
        <h1>FlightTable</h1>
        <button onClick={handleAddFlight}>Add Random Flight</button>
      </div>
      <FlightTable flightList={flightList} />
    </div>
  );
};

export default App;
