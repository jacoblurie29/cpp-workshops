import React from "react";
import { Flight } from "./App";

const FlightRow = ({flight}) =>{ //do we not need to specify the type of flight here? 
    return <tr>
        <td>{flight.flightNumber}</td>
        <td>{flight.origin}</td>
        <td>{flight.destination}</td>
        <td>{flight.departureTime}</td>
        <td>{flight.arrivalTime}</td>
        <td>{flight.flightDuration}</td>
    </tr>
}

export default FlightRow; 