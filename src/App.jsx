import "./index.css";
import React from "react";
import Header from "./Componentes/Header.jsx";
import Apresentação from "./Componentes/Apresentação";
function App() {
 return (
  <React.Fragment>
   <Header />
   <Apresentação nome="Fulano" idade="21" profissao="programador"/>
  </React.Fragment>
 );
}

export default App;
