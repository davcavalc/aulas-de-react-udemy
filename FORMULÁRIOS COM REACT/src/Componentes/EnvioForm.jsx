import React, { useState } from "react";

const EnvioForm = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Enviando o formulário");
		console.log(name, email);
	};
	return (
		<>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
                <h2>Enviando formulários</h2>
				<label>
					<span>Nome:</span>
					<input type="text" name="name" />
				</label>
				<label>
					<span>Email:</span>
					<input type="email" name="email" />
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</>
	);
};

export default EnvioForm;
