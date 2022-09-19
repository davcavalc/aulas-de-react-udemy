import React from "react";
import "./index.css";

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Componentes/Navbar";

function App() {
 return (
  <>
   <div>
    <h1 className="text-4xl flex justify-center font-bold mb-6">
     React Router
    </h1>
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </BrowserRouter>
   </div>
  </>
 );
}

export default App;