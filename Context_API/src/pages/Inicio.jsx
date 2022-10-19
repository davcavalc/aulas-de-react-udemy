import React from "react";
// import { useContext } from "react";
import ChangeCounter from "../Componentes/ChangeCounter.jsx";
// import { CounterContext } from "../context/CounterContext.jsx";

// 5 - CONTEXT MAIS COMPLEXO
// import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

// 4 - REFATORANDO COM HOOK
import { useCounterContext } from "../hooks/useCounterContext.jsx";
const Inicio = () => {
 //  const { counter } = useContext(CounterContext);
 const { counter } = useCounterContext();

 // 5 - context mais complexo
 // const { color } = useTitleColorContext();
 return (
  <>
   {/* <h1 style={{color: color}}>Home</h1> */}
   <h1>Home</h1>
   <p>Valor do contador: {counter}</p>
   {/* 3 - ALTERANDO O VALOR DO CONTEXTO */}
   <ChangeCounter />
  </>
 );
};

export default Inicio;
