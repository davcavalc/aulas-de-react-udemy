import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext.jsx";

const Inicio = () => {
 const { counter } = useContext(CounterContext);
 return (
  <>
   <h1>Home</h1>
   <p>Valor do contador: {counter}</p>
  </>
 );
};

export default Inicio;
