import React from "react";

const Apresentação = (props) => {
 return (
  <div>
   Olá! Meu nome é {props.nome}, tenho {props.idade} anos de idade e sou
   {props.profissao}.
  </div>
 );
};

export default Apresentação;
