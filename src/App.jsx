import React, { useState } from "react";
import ClassesDinâmicas from "./Componentes/ClassesDinâmicas";
import CssInline from "./Componentes/CssInline";
import CSSInlineDinâmico from "./Componentes/CSSInlineDinâmico";
import CSSnoReact from "./Componentes/CSSnoReact";
import Header from "./Componentes/Header";
import MyName from "./Componentes/MyName";
import SetNome from "./Componentes/SetNome";
// import UserDetails from "./Desafios/UserDetails";
import "./index.css";

function App() {
	const [nome] = useState("Fulano");
	const [name, useName] = useState();
	// const user = [
	// 	{ id: 1, nome: "João", idade: 32, profissao: "Advogado" },
	// 	{ id: 2, nome: "Carlos", idade: 22, profissao: "Analista de Sistemas" },
	// 	{ id: 3, nome: "Júnior", idade: 16, profissao: "Estudante" },
	// ];

	// const MaiorDeIdade = ({ nome }) => {
	// 	return (
	// 		<>
	// 			<p className="text-green-600">{nome} pode tirar a carteira de habilitação.</p>
	// 		</>
	// 	);
	// };

	// const MenorDeIdade = ({ nome }) => {
	// 	return (
	// 		<>
	// 			<p className="text-red-500">{nome} é menor de idade. Não pode tirar a CNH.</p>
	// 		</>
	// 	);
	// };

	return (
		<>
			<Header />
			{/* TAREFA 4
			<div className="bg-gray-400">
				{user.map((pessoa) => (
					<UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}>
						<div className="text-xl font-extrabold">
							{pessoa.idade >= 18 ? (
								<MaiorDeIdade nome={pessoa.nome} />
							) : (
								<MenorDeIdade nome={pessoa.nome} />
							)}
						</div>
					</UserDetails>
				))}
			</div> */}
			{/* CSS global + CSS de componente */}
			<CSSnoReact />
			{/* CSS Inline */}
			<CssInline />
			{/* CSS Inline Dinâmico */}
			<CSSInlineDinâmico name={name} />
			<div
				className="font-bold text-4xl text-center"
				style={nome === "Fulano" ? { color: "green", backgroundColor: "#000" } : null}>
				CSSInlineDinâmico
			</div>
			{/* State Lift */}
			<MyName name={name} />
			<SetNome useName={useName} />
			{/* CSS Dinâmicas */}
			<ClassesDinâmicas />
		</>
	);
}

export default App;
