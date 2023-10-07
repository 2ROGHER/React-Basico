import React, { useState } from "react";


import { getNumbers } from "../../services/observableService";

const Observable = () => {
  const [number, setNumber] = useState(0);

  const obtainGetNewNumbers = () => {
    console.log("Subscription to Observaable");
    getNumbers.subscribe({
      next(newNumber) {
        console.log("New Numbe: " + newNumber);
        setNumber(newNumber);
      },
      error() {
        alert(`Something went wrong: ${error}`);
        console.log(`Something went wrong: ${error}`);
      },
      complete() {
        alert(`Finished with: ${number}`);
        console.log(`Done with the observable`);
      },
    });
  };

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={obtainGetNewNumbers}>Obtain new Numbers</button>
    </div>
  );
};

export default Observable;
