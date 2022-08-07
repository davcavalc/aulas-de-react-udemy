import React from "react";

const UserDetails = ({ nome, idade, profissao, children }) => {
	return (
		<>
            <div className="text-center mt-3">
                <h2 className="text-4xl text-black font-bold mb-4 underline">Dados do usuário</h2>
				<ul>
					<li className="text-black font-bold">Nome: {nome}</li>
					<li className="text-black font-bold">Idade: {idade}</li>
                    <li className="text-black font-bold">Profissão: {profissao}</li>
                    {children}
				</ul>
			</div>
		</>
	);
};

export default UserDetails;
