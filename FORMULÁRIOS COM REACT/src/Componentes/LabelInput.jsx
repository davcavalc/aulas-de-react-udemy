import React from "react";

const LabelInput = () => {

	const testeMsg = () => {
		alert("Teste feito!!");
	}
	return (
		<>
			{/* Forma sugerida pela documentação do React */}
			<div className="p-7 shadow-md shadow-blue-600 flex flex-col items-center gap-5 mt-10 border-4 border-blue-900 mx-80 mb-10">
				<label className="mx-auto mt-5">
					<span className="font-bold ml-5">E-mail</span>
					<input className="ml-3 border-b-2 border-blue-700 placeholder:p-2 mx-10" type="email" name="email" placeholder="Digite o seu email" required/>
				</label>
				<label className="mx-auto">
					<span className="font-bold ml-5">Senha</span>
					<input className="ml-3 border-b-2 border-blue-700 placeholder:p-2 mx-10" type="password" name="password" placeholder="Digite a sua senha" required/>
				</label>
				<label className="mx-auto">
					<span className="font-bold ml-5">Telefone</span>
					<input className="ml-3 border-b-2 border-blue-700 placeholder:p-2 mx-10" type="telephone" name="telephone" placeholder="Digite o seu telefone" required/>
				</label>
				<input onClick={testeMsg} className="ml-3 border-[3px] mb-5 border-blue-700 w-40 rounded-md shadow-md shadow-current text-black font-bold" type="button" value="Entrar" name="button" />
			</div>
		</>
	);
};

export default LabelInput;
