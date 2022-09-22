import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Products = () => {
 // 4 - ROTA DINÂMICA
 const { id } = useParams();

 // 5 - CARREGAMENTO DADO INDIVIDUAL
 const url = "http://localhost:3000/products/" + id;
 const { data: products, loading, error } = useFetch(url);

 console.log(products);
 return (
  <>
   <p className="flex justify-center border-[3px] backgrad mx-[25%] text-white font-bold rounded-md">
    ID do produto: {id}
   </p>
   <p className="text-justify ml-3 my-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi
    aspernatur deserunt exercitationem commodi laudantium, corrupti mollitia eum
    reprehenderit deleniti.
   </p>
   {error && (
    <p className="font-bold text-red-500">
     ATENÇÃO: Ocorreu um erro inesperado!
    </p>
   )}
   {loading && <p className="font-bold text-blue-500">Carregando...</p>}
   {products && (
    <div className="p-2 flex flex-col justify-center">
     <h1 className="text-3xl">Produto selecionado:</h1>
     <h4 className="font-bold">{products.nome}</h4>
     <p className="bg-green-500 font-bold">{products.preco}</p>
     {/* 6 - NESTED ROUTES */}
     <Link to={`/products/${products.id}/info`}>Mais informações</Link>
    </div>
   )}
  </>
 );
};

export default Products;
