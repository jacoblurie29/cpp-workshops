// component should go here
import FlightRow from "../FlightRow/FlightRow";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { Flight } from "../../App";

interface FlightTableProps {
  flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Flight Number</TableCell>
          <TableCell align="right">Origin</TableCell>
          <TableCell align="right">Destination</TableCell>
          <TableCell align="right">Departure Time</TableCell>
          <TableCell align="right">Arrival Time</TableCell>
          <TableCell align="right">Flight Duration</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {flights.map((flight, i) => (
          <FlightRow key={i} flight={flight} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FlightTable;
