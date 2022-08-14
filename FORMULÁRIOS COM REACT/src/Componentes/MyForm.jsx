import React, { useState } from "react";

const MyForm = ({ user }) => {
	// 3 - Gerenciamento de dados
	const [name, setName] = useState(user ? user.name : "");
	const [email, setEmail] = useState(user ? user.email : "");

	const handleName = (e) => setName(e.target.value);

	// console.log(name);
	// console.log(email);

	// 4 - Enviando formulários
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Dados enviados com sucesso!!");
		console.log(name, email);
		// 6 - Resetando forms
		setName("");
		setEmail("");
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
