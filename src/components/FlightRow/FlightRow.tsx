// row component for the table of flights should go here

import { Flight } from "../../App"

interface FlightRowProps{
    flight: Flight
}


const FlightRow = ({flight} : FlightRowProps) => {
    return(
        <div className="ROW">
            {flight.flightNumber + " " + " "}
            
            {flight.arrivalTime + "   " + "  "}
            {" " + flight.departureTime + "     " + " " + " "}
            {flight.flightDuration + "    " + " "}
            {flight.origin + "     "}
            {flight.destination}

        </div>
        
    )
}

export default FlightRow