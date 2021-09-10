import React from "react";

const PrimeraApp = (props) => {
  
 const {saludo} = props;

  return (
    <>
      <h1>{saludo}</h1>
      <p>Texto prueba</p>
    </>
  );
};

export default PrimeraApp;
