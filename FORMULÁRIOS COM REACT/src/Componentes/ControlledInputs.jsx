import React, { useState } from "react";

const ControlledInputs = ({ user }) => {
	const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados enviados com sucesso!");
        console.log(name, email);
    }
	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col items-center mb-8 shadow-md shadow-current mt-8 border-4 gap-5 bg-black border-lime-600">
				<h2 className="mt-5 font-bold text-2xl text-amber-600 underline">Controlled inputs</h2>
				<label htmlFor="name">
					<span className="text-white font-bold">Nome:</span>
					<input className="ml-4 rounded-md" type="text" name="name" value={name}/>
				</label>
				<label>
					<span className="text-white font-bold">Email:</span>
					<input className="ml-4 rounded-md" type="email" name="email" value={email}/>
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

export default ControlledInputs;
