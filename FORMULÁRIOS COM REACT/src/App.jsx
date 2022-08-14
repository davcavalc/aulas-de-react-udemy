import { useState } from "react";
import MyForm from "./Componentes/MyForm";
import "./index.css";

function App() {
	const [nome, setNome] = useState();
	return (
		<>
			<h1 className="flex justify-center mt-8 font-bold uppercase text-5xl mx-4 bg-slate-500 text-white">
				forms
			</h1>
			{/* 5 - Controlled inputs */}
			<MyForm user={{ name: "Josias", email: "josias@gmail.com" }} />
		</>
	);
}

export default App;
