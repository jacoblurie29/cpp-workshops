import React from "react";
import FlightRow from "./FlightRow";
import { Flight } from "./App";
import { FlightTableProps } from "./FlightTable.definitions";

const FlightTable = ({ flightList }: FlightTableProps) => {
    return <table>
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
            {flightList.map((flight: Flight) => (
                <FlightRow flight={flight} ></FlightRow>
            ))}
        </tbody>
    </table>
}

export default FlightTable; 