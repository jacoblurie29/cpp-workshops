import { Flight } from "../../App"
import FlightRow from "../FlightRow/FlightRow"


// component should go here
interface FlightTableProps {
    flights: Flight[]
}

const FlightTable = ({flights} : FlightTableProps) => {


    return(
        <div className="TABLE">
            {"flight num Arrival Time Departure Time Duration Origin Destination"}
            {flights.map((flight:Flight) => (
                <FlightRow flight = {flight} />
            ))}
        </div>
        
    )

}

export default FlightTable