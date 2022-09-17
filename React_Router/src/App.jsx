import React from "react";
import "./index.css";

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Componentes/Navbar";
// const url = "http://localhost:3000/produtos";

function App() {
 //  const [produtos, setProdutos] = useState([]);

 // resgatar dados
 //  useEffect(() => {
 //   async function fetchData() {
 //    const res = await fetch(url);
 //    const data = await res.json();
 //    setProdutos(data);
 //   }
 //   fetchData();
 //  }, []);
 //  console.log(produtos);
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
   {/* <ul>
    {produtos.map((products) => (
     <li className="flex hjustify-center" key={products.id}>
      <strong className="mr-2">{products.nome}</strong> - {products.preco}
     </li>
    ))}
   </ul> */}
  </>
 );
}

export default App;
