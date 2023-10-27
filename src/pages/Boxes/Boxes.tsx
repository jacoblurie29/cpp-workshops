import styles from "./Boxes.module.css";
import { useState } from "react";

interface BoxData {
  title: string;
  description: string;
}

const Boxes = () => {
  const [boxes, setBoxes] = useState<BoxData[]>([] as BoxData[]);

  const generateBoxData = () => {
    // generate the data
    const newBox: BoxData = {
      title: "test",
      description: "test",
    };

    setBoxes([...boxes, newBox]);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Welcome to our site!</h1>
      <button onClick={() => generateBoxData()}>Click me!</button>
      {boxes.map((box: BoxData, index: number) => (
        <div key={index}>
          <div>{box.title}</div>
          <div>{box.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
