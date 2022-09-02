import React from "react";
import "./index.css";
import { useState, useEffect } from "react";

// const url = "http://localhost:3000/products";

function App() {
 const [products, setProducts] = useState([]);

 // 1 - resgatando dados
 useEffect(() => {
  async function fetchData() {
   const res = await fetch("http://localhost:3000/products");

   const data = await res.json();

   setProducts(data);
  }

  fetchData();
 }, []);

 return (
  <>
   <div className="border-[4px] border-black shadow-lg shadow-blue-500">
    <h1 className="title">lista de produtos</h1>
    <ul>
     {products.map((product) => (
      <li className="flex justify-center mt-6 font-bold mb-6" key={product.id}>
       {product.name} - R$: {product.price}
      </li>
     ))}
    </ul>
   </div>
  </>
 );
}

export default App;
