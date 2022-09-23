import React from "react";
import "./index.css";

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Componentes/Navbar";
import Products from "./pages/Products";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

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
      {/* 6 - NESTED ROUTES */}
      <Route path="/products/:id/info" element={<Info />} />
      {/* 4 - ROTA DINÂMICA */}
      <Route path="/products/:id" element={<Products />} />
      {/* NO MATCH ROUTE */}
      <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>
   </div>
  </>
 );
}

export default App;
