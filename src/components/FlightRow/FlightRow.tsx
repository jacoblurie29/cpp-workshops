// row component for the table of flights should go here
import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import type { Flight } from "../../App";

interface FlightRowProps {
  flight: Flight;
}

const FlightRow: React.FC<FlightRowProps> = ({ flight }) => (
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      {flight.flightNumber}
    </TableCell>
    <TableCell align="right">{flight.origin}</TableCell>
    <TableCell align="right">{flight.destination}</TableCell>
    <TableCell align="right">{flight.departureTime}</TableCell>
    <TableCell align="right">{flight.arrivalTime}</TableCell>
    <TableCell align="right">{flight.flightDuration}</TableCell>
  </TableRow>
);

export default FlightRow;
