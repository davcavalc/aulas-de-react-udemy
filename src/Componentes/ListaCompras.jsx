import React from "react";

const ListaCompras = (props) => {
 return (
  <React.Fragment>
   <div className="bg-blue-300">
    <h2 className="text-center font-extrabold text-3xl text-amber-900">Lista de compras</h2>
    <ul className="text-center">
     <li className="text-black">Carne: {props.carne}</li>
     <li className="text-black">Verdura: {props.verdura}</li>
     <li className="text-black">
      Material de limpeza: {props.limpeza}
     </li>
     <li className="text-black">
      Produto de higiene: {props.higiene}
     </li>
     <li className="text-black">Bebida: {props.bebida}</li>
    </ul>
   </div>
  </React.Fragment>
 );
};

export default ListaCompras;
