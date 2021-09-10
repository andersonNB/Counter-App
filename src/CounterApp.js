import React from "react";
import PropTypes from "prop-types";

//Esto es un componente funcional
const CounterApp = ({ value }) => {
  //handleAdd
  const handleAdd = (e) => {
    console.log(e);
    return ()=>{console.log('Hola desde el return de una función')};
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd()}>+1</button>
    </div>
  );
};

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
