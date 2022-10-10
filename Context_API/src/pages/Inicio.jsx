import React from "react";
// import { useContext } from "react";
import ChangeCounter from "../Componentes/ChangeCounter.jsx";
// import { CounterContext } from "../context/CounterContext.jsx";


// 4 - REFATORANDO COM HOOK
import { useCounterContext } from "../hooks/useCounterContext.jsx";
const Inicio = () => {
//  const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
 return (
  <>
   <h1>Home</h1>
   <p>Valor do contador: {counter}</p>
   {/* 3 - ALTERANDO O VALOR DO CONTEXTO */}
   <ChangeCounter />
  </>
 );
};

export default Inicio;
