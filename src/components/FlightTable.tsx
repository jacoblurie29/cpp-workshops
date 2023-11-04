import { FlightTableProps } from "./FlightTable.definitions.ts"; //props
import FlightRow from "./FlightRow.tsx";
import { Flight } from "../App.tsx"; //imports Flight interface type

const FlightTable = ({flights}: FlightTableProps) => { //takes in the flight array as props from defs

    return (
            <table>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Flight Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight: Flight) => (
                        <FlightRow flight={flight}></FlightRow> //maps each flight's info to 1 row
                    ))}
                </tbody>
            </table>
    );
};

export default FlightTable;