// 1 - CRIAR CONTEXTO
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - CRIAR PROVIDER
export const CounterContextProvider = ({ children }) => {
 const [counter, setCounter] = useState(1);

 return (
  <>
   <CounterContext.Provider value={{ counter, setCounter }}>
    {children}
   </CounterContext.Provider>
  </>
 );
};
