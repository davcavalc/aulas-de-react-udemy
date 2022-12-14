import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CounterContextProvider } from "./context/CounterContext.jsx";
// import { TitleColorContextProvider } from "./context/TitleColorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  {/* 2 - CRIANDO PROVIDER */}
  <CounterContextProvider>
    <App />
   {/* <TitleColorContextProvider></TitleColorContextProvider> */}
  </CounterContextProvider>
 </React.StrictMode>
);
