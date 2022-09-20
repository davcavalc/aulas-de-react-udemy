import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
 // 4 - ROTA DINÂMICA
 const { id } = useParams();
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
  </>
 );
};

export default Products;
