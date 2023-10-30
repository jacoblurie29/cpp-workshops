import { FlightRowProps } from "./FlightRow.definitions";

const FlightRow = ({ flight }: FlightRowProps) => { //do we not need to specify the type of flight here? 
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