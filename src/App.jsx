import Header from "./Componentes/Header";
import UserDetails from "./Desafios/UserDetails";
import "./index.css";

function App() {
	const user = [
		{ nome: "João", idade: 32, profissao: "Advogado" },
		{ nome: "Carlos", idade: 22, profissao: "Analista de Sistemas" },
		{ nome: "Júnior", idade: 16, profissao: "Estudante" },
	];

	const MaiorDeIdade = ({ nome }) => {
		return (
			<>
				<p className="text-lime-600">{nome} pode tirar a carteira de habilitação.</p>
			</>
		);
	};

	const MenorDeIdade = ({ nome }) => {
		return (
			<>
				<p className="text-red-600">{nome} é menor de idade. Não pode tirar a CNH.</p>
			</>
		);
	};

	return (
		<>
			<Header />
			{/* TAREFA 4 */}
			<div className="bg-gray-400">
				{user.map((pessoa) => (
					<UserDetails nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}>
						<div className="text-xl font-bold">
							{pessoa.idade >= 18 ? (
								<MaiorDeIdade nome={pessoa.nome} />
							) : (
								<MenorDeIdade nome={pessoa.nome} />
							)}
						</div>
					</UserDetails>
				))}
			</div>
		</>
	);
}

export default App;
