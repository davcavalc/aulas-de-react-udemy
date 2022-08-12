import EnvioForm from "./Componentes/EnvioForm";
import Form1 from "./Componentes/Form1";
import LabelInput from "./Componentes/LabelInput.jsx";
import ManipulaValores from "./Componentes/ManipulaValores.jsx";
import "./index.css";

function App() {
	return (
		<>
			<h1 className="flex justify-center mt-8 font-bold uppercase text-5xl mx-4 bg-slate-500 text-white">
				Olá mundo!!
			</h1>
			<Form1 />
			{/* 2 LABEL ENVOLVENDO INPUT */}
			<LabelInput />
			{/* 3 MANIPULAÇÃO DE DADOS DE UM INPUT */}
			<ManipulaValores />
			{/* 4 ENVIO DE FORMULÁRIO */}
			<EnvioForm />
			{/* 5 ENVIO DE FORMULÁRIO */}
		</>
	);
}

export default App;
