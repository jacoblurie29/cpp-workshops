import FlightRow from "./FlightRow";
import { FlightTableProps } from "./FlightTable.definitions.ts";
import { Flight } from "./App.tsx";

const FlightTable = ({ flights }: FlightTableProps) => (
  <table>
    <thead>
      <tr>
        <th style={{ paddingRight: "70px" }}>Flight Number</th>
        <th style={{ paddingRight: "60px" }}>Origin</th>
        <th style={{ paddingRight: "60px" }}>Destination</th>
        <th style={{ paddingRight: "80px", paddingLeft: "40px" }}>
          Departure Time
        </th>
        <th style={{ paddingRight: "100px", paddingLeft: "40px" }}>
          Arrival Time
        </th>
        <th style={{ paddingRight: "40px" }}>Flight Duration</th>
      </tr>
    </thead>
    <tbody>
      {flights.map((flight: Flight, index: number) => (
        <FlightRow key={index} flight={flight} />
      ))}
    </tbody>
  </table>
);

export default FlightTable;
