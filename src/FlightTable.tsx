import FlightRow from "./FlightRow";
import React from "react";
// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components";
import type { Flight } from "./App";

export interface FlightTableProps {
  flightList: Flight[];
}

// Used styled-components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const StyledThead = styled.thead`
  background-color: #f4f4f4;
`;

const StyledTh = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const FlightTable: React.FC<FlightTableProps> = ({ flightList }) => (
  <StyledTable>
    <StyledThead>
      <tr>
        <StyledTh>Flight Number</StyledTh>
        <StyledTh>Departure</StyledTh>
        <StyledTh>Destination</StyledTh>
        <StyledTh>Flight Duration</StyledTh>
        <StyledTh>Departure Time</StyledTh>
        <StyledTh>Arrival Time</StyledTh>
      </tr>
    </StyledThead>
    <tbody>
      {flightList.map((flight, index) => (
        <FlightRow key={index} flight={flight} />
      ))}
    </tbody>
  </StyledTable>
);

export default FlightTable;
