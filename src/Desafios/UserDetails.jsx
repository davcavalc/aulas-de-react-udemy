import React from "react";

const UserDetails = ({nome, idade, profissao}) => {
	
    return <>
        <div className="text-center mt-3">
            <ul>
                <li className="text-white font-bold">Nome: {nome}</li>
                <li className="text-white font-bold">Idade: {idade}</li>
                <li className="text-white font-bold">Profissão: {profissao}</li>
            </ul>
        </div>
    </>
};

export default UserDetails;
