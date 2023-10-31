import { FlightRowProps } from "./FlightRow.definitions.ts";

const FlightRow = ({ key, flight }: FlightRowProps) => (
  <tr key={key}>
    <td>{flight.flightNumber}</td>
    <td>{flight.origin}</td>
    <td>{flight.destination}</td>
    <td>{flight.departureTime}</td>
    <td>{flight.arrivalTime}</td>
    <td>{flight.flightDuration} hours</td>
  </tr>
);

export default FlightRow;
