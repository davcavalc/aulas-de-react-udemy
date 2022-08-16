import React, { useState } from "react";

const MyForm = ({ user }) => {
	// 3 - Gerenciamento de dados
	const [name, setName] = useState(user ? user.name : "");
	const [email, setEmail] = useState(user ? user.email : "");
	const [role, setRole] = useState(user ? user.role : "");

	const handleName = (e) => setName(e.target.value);

	// console.log(name);
	// console.log(email);

	// 4 - Enviando formulários
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Dados enviados com sucesso!!");
		console.log(name, email, role);
		// 6 - Resetando forms
		setName("");
		setEmail("");
		setRole("");
	};
	return (
		<>
			{/* 1 - criação de form */}
			<div className="bg-wood bg-cover">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-2 items-center border-4 border-black mx-[70px] rounded-md shadow-md shadow-black glass">
					<label className="text-xl" htmlFor="name">
						<span className="text-xl font-bold">Nome</span>
						<input
							className="rounded-md p-2"
							type="text"
							name="name"
							placeholder="Digite o seu nome"
							onChange={handleName}
							value={name}
						/>
					</label>
					<label className="text-xl" htmlFor="email">
						<span className="text-xl font-bold">Email</span>
						<input
							className="rounded-md p-2"
							type="text"
							name="email"
							placeholder="Digite o seu email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</label>
					{/* 9 - Uso do select */}
					<label htmlFor="">
						<span className="font-bold">Dados do sistema</span>
						<select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
							<option value="user">User</option>
							<option value="editor">Editor</option>
							<option value="admin">Admin</option>
						</select>
					</label>
					<input
						className="w-40 rounded-md border-[2px] glass border-black font-bold shadow-md shadow-teal-400"
						type="submit"
						value="Enviar"
					/>
				</form>
			</div>
		</>
	);
};

export default MyForm;
