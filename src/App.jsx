import CssInline from "./Componentes/CssInline";
import CSSnoReact from "./Componentes/CSSnoReact";
import Header from "./Componentes/Header";
// import UserDetails from "./Desafios/UserDetails";
import "./index.css";

function App() {
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
			<CssInline/>
		</>
	);
}

export default App;
