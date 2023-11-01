import { useEffect } from "react";
import styles from "./App.module.css";
import {faker} from "@faker-js/faker";

interface Flight {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  flightDuration: number;
}



const App = () => {

  const [allFlights, setFlights] = useState(0);
  

  useEffect(() => {

  })



  function generateFlights(): Flight{

    const flight: Flight = {
      flightNumber: faker.string.alphanumeric(6),
      origin: faker.string.alphanumeric(3),
      destination: faker.string.alphanumeric(3),
      departureTime: faker.date.anytime(),
      arrivalTime: faker.date.anytime(),
      flightDuration: faker.number.int({min: 1, max: 8})
    }

    return flight;
  } 





  return (
  <div className={styles.mainContainer}>
    <div className = "genButton">
      <button type="button" onClick={generateFlights}>
        Generate a New Flight
      </button>

    </div>
    
  </div>
  )
};

export default App;
