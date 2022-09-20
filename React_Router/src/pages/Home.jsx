import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
 // 3 - CARREGAMENTO DE DADOS
 const url = "http://localhost:3000/products";
 const { data: items, loading, error } = useFetch(url);
 return (
  <div>
   <h1 className="flex justify-center bg-amber-500 font-bold">Produtos</h1>
   {error && <p>{error}</p>}
   <ul>
    {items &&
     items.map((item) => (
      <div className="flex justify-center">
          <li className="flex items-center flex-col border-[1px] border-solid rounded-[5px] p-10 mt-2 backgrad m-1.5 w-[25%]" key={item.id}>
           <h2 className="font-bold p-2 uppercase">{item.nome}</h2>
           <p className="text-white font-semibold">R$: {item.preco}</p>
           {/* 4 - ROTA DINÂMICA */}
           <Link className="p-2 text-white underline" to={`/products/${item.id}`}>Detalhes</Link>
          </li>
      </div>
     ))}
   </ul>
  </div>
 );
};

export default Home;
