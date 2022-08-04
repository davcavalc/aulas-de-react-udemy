import React from "react";

const Destructuring = ({ brand, km, cor, newCar }) => {
 return (
  <>
   <div className="bg-slate-200 text-black">
    <h2 className="text-3xl font-bold underline text-center">
     Detalhes do carro
    </h2>
    <ul className="text-center">
     <li>Marca: {brand}</li>
     <li>KM: {km}</li>
     <li>Cor: {cor}</li>
    </ul>
    {newCar && <p className="text-center underline">Este carro é novo!</p>}
    {!newCar && <p className="text-center underline">Este carro é usado!</p>}
   </div>
  </>
 );
};

export default Destructuring;
