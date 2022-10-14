import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Inicio from "./pages/Inicio.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";

function App() {
 return (
  <>
   <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path="/" element={<Inicio />} />
     <Route path="/sobre" element={<Sobre />} />
     <Route path="/contato" element={<Contato />} />
    </Routes>
   </BrowserRouter>
   <h1>Teste1</h1>
  </>
 );
}

export default App;
