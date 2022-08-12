import ControlledInputs from "./Componentes/ControlledInputs";
// import ControlledInputs2 from "./Componentes/ControlledInputs2";
import { useState } from "react";
import EnvioForm from "./Componentes/EnvioForm";
import Form1 from "./Componentes/Form1";
import Idade from "./Componentes/Idade";
import LabelInput from "./Componentes/LabelInput.jsx";
import ManipulaValores from "./Componentes/ManipulaValores.jsx";
import Saudacao from "./Componentes/Saudacao";
import "./index.css";

function App() {
	const [nome, setNome] = useState();
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
			{/* 5 CONTROLLED INPUTS */}
			<ControlledInputs user={{ name: "Josias", email: "josias@gmail.com" }} />
			{/* <ControlledInputs2 /> */}
			{/* STATE LIFT */}
			<Saudacao setNome={setNome} />
			<Idade nome={nome}/>
		</>
	);
}

export default App;
