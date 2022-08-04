import "./index.css";
import React, { useState } from "react";
import Header from "./Componentes/Header.jsx";
import Apresentação from "./Componentes/Apresentação";
import Props from "./Componentes/Props";
import Destructuring from "./Componentes/Destructuring";
import ListaCompras from "./Componentes/ListaCompras";
function App() {
 const name = "Batman";
 const [userName] = useState("Maria");
 const cars = [
  { id: 1, brand: "Ferrari", cor: "amarelo", newCar: true, km: 0 },
  { id: 2, brand: "Audi", cor: "branco", newCar: false, km: 125670 },
  { id: 3, brand: "BMW", cor: "verde", newCar: true, km: 0 },
  { id: 4, brand: "Lamborghini", cor: "azul", newCar: false, km: 78980 },
  { id: 5, brand: "Alfa Romeo", cor: "preto", newCar: true, km: 0 },
 ];

 const produtos = [
  {
   carne: "Bisteca",
   verdura: "couve",
   limpeza: "detergente",
   higiene: "escova de dente",
   bebida: "água",
  },
  {
   carne: "Bisteca",
   verdura: "alface",
   limpeza: "detergente",
   higiene: "pasta de dente",
   bebida: "vinho",
  },
  {
   carne: "Bisteca",
   verdura: "espinafre",
   limpeza: "detergente",
   higiene: "fio dental",
   bebida: "cerveja",
  },
  {
   carne: "Bisteca",
   verdura: "pimentão",
   limpeza: "detergente",
   higiene: "escova de dente",
   bebida: "vodka",
  },
  {
   carne: "Bisteca",
   verdura: "rúcula",
   limpeza: "detergente",
   higiene: "escova de dente",
   bebida: "café",
  },
 ];
 return (
  <React.Fragment>
   <Header />
   <Apresentação nome="Fulano" idade="21" profissao="programador" />
   {/* PROPS */}
   <Props nome={name} />
   <Props nome={userName} />
   {/* DESTRUCTURING */}
   <Destructuring brand="Wolkswagen" km={10000} cor="branco" newCar={false} />
   {/* REAPROVEITAMENTO */}
   <Destructuring brand="Fiat" km={12000} cor="vermelho" newCar={true} />
   <Destructuring brand="Nissan" km={1000} cor="azul" newCar={true} />
   {/* LOOP EM ARRAY DE OBJETOS */}
   {cars.map((car) => (
    <Destructuring
     brand={car.brand}
     cor={car.cor}
     km={car.km}
     newCar={car.newCar}
    />
   ))}

   {/* LISTA 2 */}
   {produtos.map((product) => (
    <ListaCompras
     carne={product.carne}
     verdura={product.verdura}
     limpeza={product.limpeza}
     higiene={product.higiene}
     bebida={product.bebida}
    />
   ))}
  </React.Fragment>
 );
}

export default App;
