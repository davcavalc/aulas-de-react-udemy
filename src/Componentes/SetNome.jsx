import React from "react";

const SetNome = ({ useName }) => {
	return (
		<>
			<h3>Digite o seu nome</h3>
			<input type="text" placeholder="Seu nome" onChange={(e) => useName(e.target.value)} />
		</>
	);
};

export default SetNome;
