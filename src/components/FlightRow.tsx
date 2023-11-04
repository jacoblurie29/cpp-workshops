import { FlightRowProps } from "./FlightRow.definitions";

const FlightRow = ({ flight }: FlightRowProps) => {//takes in the flight type from props
    
    return <tr>
            <td>{flight.flightNumber}</td>
            <td>{flight.origin.toUpperCase()}</td>
            <td>{flight.destination.toUpperCase()}</td>
            <td>{flight.departureTime.toString()}</td>
            <td>{flight.arrivalTime.toString()}</td>
            <td>{flight.flightDuration}</td>
        </tr>

};

export default FlightRow;