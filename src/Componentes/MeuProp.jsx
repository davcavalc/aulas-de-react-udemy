import React from "react";

const MeuProp = (props) => {
 return (
  <React.Fragment>
   <div className="text-2xl text-center">
    <strong className="text-amber-900">Nome do usuário:</strong> {props.name} {props.sobrename}
   </div>
  </React.Fragment>
 );
};

export default MeuProp;
