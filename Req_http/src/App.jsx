import React from "react";
import "./index.css";
import { useState, useEffect } from "react";

// const url = "http://localhost:3000/products";

function App() {
 const [products, setProducts] = useState([]);
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");

 // 1 - resgatando dados
 useEffect(() => {
  async function fetchData() {
   const res = await fetch("http://localhost:3000/products");

   const data = await res.json();

   setProducts(data);
  }

  fetchData();
 }, []);

 // 2 - Add de produtos
 const handleSubmit = async (e) => {
  e.preventDefault();
  const product = {
   name,
   price,
  };
  const res = await fetch("http://localhost:3000/products", {
   method: "POST",
   headers: {
    "Content-type": "application/json",
   },
   body: JSON.stringify(product),
  });
 };

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
    {/* FORMULÁRIO */}
    <div className="add-product">
     <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
     >
      <label htmlFor="">
       <span>Nome:</span>
       <input
        className="flex flex-col mb-[15px]"
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
       />
       <span>Preço:</span>
       <input
        className="flex flex-col mb-[15px]"
        type="number"
        value={price}
        name="price"
        onChange={(e) => setPrice(e.target.value)}
       />
       <input
        className="mb-4 border-[2px] border-[#000] w-40 rounded-md shadow-lg shadow-black font-bold hover:border-[6px] hover:border-amber-500 hover:bg-black hover:text-white"
        type="submit"
        value="Criar produto"
       />
      </label>
     </form>
    </div>
   </div>
  </>
 );
}

export default App;
