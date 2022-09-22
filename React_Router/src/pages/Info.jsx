import React from "react";
import { useParams } from "react-router-dom";

const Info = () => {
 const { id } = useParams();
 return (
  <div>
   <h1 className="hover:text-gray-500 font-bold">
    Mais informações sobre o produto {id}
   </h1>
  </div>
 );
};

export default Info;
