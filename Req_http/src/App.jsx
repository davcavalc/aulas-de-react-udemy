import "./index.css";
import React, { useState, useEffect } from "react";

// // 4 - CUSTOM HOOK {
import { useFetch } from "./hooks/useFetch";
// }

const url = "http://localhost:3000/products";

function App() {
 const [products, setProducts] = useState([]);

 // 4 - CUSTOM HOOK
 const { data: items, httpConfig, loading } = useFetch(url);

 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 // 1 - RESGATANDO DADOS
 //  useEffect(() => {
 //   async function fetchData() {
 //    const res = await fetch(url);
 //    const data = await res.json();
 //    setProducts(data);
 //   }
 //   fetchData();
 //  }, []);

 // 2 - ADIÇÃO DE PRODUTOS
 const handleSubmit = async (e) => {
  e.preventDefault();
  const product = {
   name,
   price,
  };

  console.log(product);
  //   const res = await fetch(url, {
  //    method: "POST",
  //    headers: {
  //     "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(product),
  //   });

  //   const addedProduct = await res.json();

  //   // 3 - CARREGAMENTO DINÂMICO
  //   setProducts((prevProducts) => [...prevProducts, addedProduct]);
  setName("");
  setPrice("");

  // 5 - REFETORANDO O POST
  httpConfig(product, "POST");
 };
 return (
  <>
   <h1 className="flex justify-center text-2xl uppercase bg-amber-400 text-black font-bold leading-1 h-10">
    Lista de produtos
   </h1>
   {/* 6 - LOADING */}
   {loading && <p>Carregado dados...</p>}
   {!loading && (
    <ul>
     {items &&
      items.map((product) => (
       <li className="flex justify-center" key={product.id}>
        {product.name} -
        <span className="font-bold text-blue-500 ml-3">
         R$: {product.price}
        </span>
       </li>
      ))}
    </ul>
   )}
   <div className="add-products">
    <p className="flex justify-center h-10 items-center  uppercase underline font-bold bg-amber-400 text-black">
     Adicionar produto
    </p>
    <form
     className="flex flex-col items-center justify-center mt-5"
     onSubmit={handleSubmit}
    >
     <label>
      <span className="font-bold justify-center flex">Nome:</span>
      <input
       className="flex flex-col mb-[15px] border-2 shadow-lg shadow-black rounded-md"
       type="text"
       value={name}
       name="name"
       onChange={(e) => setName(e.target.value)}
      />
     </label>
     <label>
      <span className="font-bold justify-center flex">Preço:</span>
      <input
       className="flex flex-col mb-[15px] border-2 shadow-lg shadow-black rounded-md"
       type="number"
       value={price}
       name="price"
       onChange={(e) => setPrice(e.target.value)}
      />
         </label>
         {/* 7 - STATE DE LOADING NO POST */}
     {loading && <input type="submit" disabled value="Aguarde"/>}
     {!loading && <input type="submit" value="Criar"/>}
    </form>
   </div>
  </>
 );
}

export default App;
