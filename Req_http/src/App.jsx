import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
 const [products, setProducts] = useState([]);
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 // 1 - RESGATANDO DADOS
 useEffect(() => {
  async function fetchData() {
   const res = await fetch("http://localhost:3000/products");
   const data = await res.json();
   setProducts(data);
  }
  fetchData();
 }, []);

 // 2 - ADIÇÃO DE PRODUTOS
 const handleSubmit = async (e) => {
  e.preventDefault();
  const product = {
   name,
   price,
  };

  console.log(product);
  const res = await fetch("http://localhost:3000/products", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(product),
  });

  const addedProduct = await res.json();

  // 3 - CARREGAMENTO DINÂMICO
  setProducts((prevProducts) => [...prevProducts, addedProduct]);
 };
 return (
  <>
   <h1 className="flex justify-center text-2xl uppercase bg-amber-400 text-black font-bold leading-1 h-10">
    Lista de produtos
   </h1>
   <ul>
    {products.map((product) => (
     <li className="flex justify-center" key={product.id}>
      {product.name} -
      <span className="font-bold text-blue-500 ml-3">R$: {product.price}</span>
     </li>
    ))}
   </ul>
     <div className="add-products">
       <p className="flex justify-center h-10 leading-1  uppercase underline font-bold bg-amber-400 text-black">Adicionar produto</p>
    <form
     className="flex flex-col items-center justify-center mt-5"
     onSubmit={handleSubmit}
    >
     <label>
      <span className="font-bold justify-center flex">Nome:</span>
      <input
       className="flex flex-col mb-[15px] border-2 shadow-lg shadow-black"
       type="text"
       value={name}
       name="name"
       onChange={(e) => setName(e.target.value)}
      />
     </label>
     <label>
      <span className="font-bold justify-center flex">Preço:</span>
      <input
       className="flex flex-col mb-[15px] border-2 shadow-lg shadow-black"
       type="number"
       value={price}
       name="price"
       onChange={(e) => setPrice(e.target.value)}
      />
     </label>
     <input
      className="flex flex-col mb-[15px] border-2 border-black rounded-md w-[10em] items-center font-bold shadow-lg shadow-black"
      type="button"
      value="Submit"
     />
    </form>
   </div>
  </>
 );
}

export default App;
