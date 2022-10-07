import React from "react";
import { useContext } from "react";
import ChangeCounter from "../Componentes/ChangeCounter";
import { CounterContext } from "../context/CounterContext";

const Sobre = () => {
 const { counter} = useContext(CounterContext);
 return (
  <div className="text-4xl">
   <h1>Sobre</h1>
   <p>Valor do contador: {counter}</p>
   <ChangeCounter />
  </div>
 );
};

export default Sobre;
