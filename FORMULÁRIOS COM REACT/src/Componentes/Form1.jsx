import React, { useState } from "react";

const Form1 = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	const handleName = (event) => {
		setName(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Enviando o formulário");
		console.log(name, email);
		setEmail("");
		setName("");
	};

	return (
		<>
			{/* 1 - Criação de uma Form */}
			<h1 className="flex justify-center">Form 1</h1>
			<form className="w-[500px] m-auto text-left border-[2px]" onSubmit={handleSubmit}>
				<div className=" mt-[10px] flex flex-col ml-3 gap-3 mr-32">
					<label htmlFor="name">Nome:</label>
					<input
						onChange={(e) => setName(e.target.value)}
						className="ml-2 mt-4"
						type="text"
						name="name"
						placeholder="Digite o seu nome"
						required
					/>
					<label htmlFor="email">Email:</label>
					<input
						className="ml-2 mt-4"
						type="email"
						name="email"
						placeholder="Digite o seu email"
						required
					/>
					<label htmlFor="phone">Nome:</label>
					<input
						className="ml-2 mt-4"
						type="phone"
						name="phone"
						placeholder="Digite o seu nome"
						required
					/>
				</div>
				<input
					className="border-[2px] w-32 rounded-md shadow-md bg-slate-400 font-bold shadow-orange-300 mt-3 ml-3 mb-7"
					type="submit"
					value="Enviar"
				/>
			</form>
		</>
	);
};

export default Form1;
