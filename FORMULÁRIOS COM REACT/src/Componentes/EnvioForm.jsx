import React, { useState } from "react";

const EnvioForm = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	const handleName = (event) => {
		setName(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Enviando o formulário");
		console.log(name, email);
		setEmail("");
		setName("");
	};

	//Controlled inputs

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center mb-8 shadow-md shadow-current mt-8 border-4 gap-5 bg-black border-lime-600">
				<h2 className="mt-5 font-bold text-2xl text-white underline">Enviando formulários</h2>
				<label htmlFor="name">
					<span className="text-white font-bold">Nome:</span>
					<input className="ml-4 rounded-md" type="text" name="name" onChange={handleName} />
				</label>
				<label>
					<span className="text-white font-bold">Email:</span>
					<input
						className="ml-4 rounded-md"
						type="email"
						name="email"
						onChange={(event) => setEmail(event.target.value)}
					/>
				</label>
				<input
					className="mb-5 cursor-pointer border-[2px] rounded-md shadow-md bg-lime-300 text-black border-black font-bold w-48 shadow-lime-600"
					type="submit"
					value="Enviar"
				/>
			</form>
		</>
	);
};

export default EnvioForm;
