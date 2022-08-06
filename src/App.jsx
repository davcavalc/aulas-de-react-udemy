import "./App.css";
import Header from "./Componentes/Header";
import UserDetails from "./Desafios/UserDetails";

function App() {
	const user = [
		{ nome: "João", idade: 32, profissao: "Advogado" },
		{ nome: "Carlos", idade: "22", profissao: "Analista de Sistemas" },
		{ nome: "Júnior", idade: "16", profissao: "Estudante" },
	];

	const MaiorDeIdade = () => {
		return (
			<>
				<p>{user.nome} pode tirar a carteira de habilitação.</p>
			</>
		);
	};

	const MenorDeIdade = () => {
		return (
			<>
				<p>{user.name} é menor de idade. Não pode tirar a CNH.</p>
			</>
		);
	};

	return (
		<>
			<Header />
			{/* TAREFA 4 */}
			{user.map((pessoa) => (
				<UserDetails nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
			))}
			{user.idade >= 18 ? <MaiorDeIdade /> : <MenorDeIdade />}
		</>
	);
}

export default App;
