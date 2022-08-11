import React, { useState } from "react";
const ManipulaValores = () => {
	// 3 - Gerenciamento de dados
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	const handleChange = (e) => {
		setName(e.target.value);
	};

	console.log(name);
	return (
		<>
			<form className="flex justify-center border-[2.5px] border-green-600 mx-52 mt-7 shadow-md shadow-current">
				<div className="flex flex-col">
					<h1 className="text-xl underline font-bold">Manipulação de valores</h1>
					<div className="">
						<label htmlFor="">
							<span className="font-bold">Nome</span>
							<input
								className="ml-4 placeholder:p-4 mt-7 mb-5"
								type="text"
								name="name"
								placeholder="Digite o seu nome:"
								onChange={handleChange}
							/>
						</label>
					</div> //TODO continuação da aula
				</div>
			</form>
		</>
	);
};

export default ManipulaValores;
