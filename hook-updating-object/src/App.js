import React, { useState } from "react";


function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateYear = () => {
    setCar(previousState => {
      return { ...previousState, year: "2000" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateYear}
      >Blue</button>
    </>
  )
}
export default Car;
