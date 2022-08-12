import React from "react";

const Saudacao = ({ setNome }) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <p>Digite o seu nome:</p>
                <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
            </div>
        </>
    )
};

export default Saudacao;
