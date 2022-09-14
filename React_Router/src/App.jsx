import React, { useState, useEffect } from "react";
import "./index.css";
const url = "http://localhost:3000/produtos";

function App() {
 const [produtos, setProdutos] = useState([]);

 // resgatar dados
 useEffect(() => {
  async function fetchData() {
   const res = await fetch(url);
   const data = await res.json();
   setProdutos(data);
  }
  fetchData();
 }, []);
 console.log(produtos);
 return (
  <>
   <h1 className="text-3xl flex justify-center font-bold uppercase mt-5 hover:bg-amber-500 bg-green-300">
    React Router
   </h1>
   <h3 className="flex justify-center font-bold mt-5 capitalize bg-teal-200 rounded-md">Lista de produtos</h3>
   <ul>
    {produtos.map((products) => (
     <li className="flex justify-center" key={products.id}>
      <strong className="mr-2">{products.nome}</strong> - {products.preco}
     </li>
    ))}
   </ul>
  </>
 );
}

export default App;
