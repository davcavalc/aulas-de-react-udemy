import React from "react";

const Props = (props) => {
 return (
  <React.Fragment>
   <h2 className="text-2xl font-bold text-yellow-500">
    O nome do usuário é: {props.nome}
   </h2>
  </React.Fragment>
 );
};

export default Props;
