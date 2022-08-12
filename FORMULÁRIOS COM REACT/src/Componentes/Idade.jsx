import React from "react";

const Idade = ({ nome }) => {
	const geraSaudacao = (algumNome) => {
		return `Olá ${algumNome}, tudo bem com você?`;
	};
	return <div className="bg-black text-amber-500 text-center">{geraSaudacao(nome)}</div>;
};

export default Idade;
