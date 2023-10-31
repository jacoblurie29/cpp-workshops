import { type Flight } from "../types";
import { type ReactElement } from "react";

const FlightTable = (props: { flights: Flight[] }): ReactElement => {
  const { flights } = props;

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Airport</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight: Flight, index) => (
            <tr key={index}>
              <td>{flight.flightCode}</td>
              <td>{flight.airport}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FlightTable;
