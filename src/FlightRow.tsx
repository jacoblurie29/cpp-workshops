import React from "react";
import type { Flight } from "./App";

export interface FlightR {
  flight: Flight;
}

// FlightRow component for displaying flight information in a table row format:
const FlightRow: React.FC<FlightR> = ({ flight }) => {
  // Destructuring properties from the flight object for easier access
  const {
    flightNumber,
    departure,
    destination,
    flightDuration,
    departureTime,
    arrivalTime,
  } = flight;

  return (
    <tr>
      <td>{flightNumber}</td>
      <td>{departure}</td>
      <td>{destination}</td>
      <td>{flightDuration}</td>
      <td>{departureTime}</td>
      <td>{arrivalTime}</td>
    </tr>
  );
};

// Exporting the FlightRow component as the default export of this module
export default FlightRow;
