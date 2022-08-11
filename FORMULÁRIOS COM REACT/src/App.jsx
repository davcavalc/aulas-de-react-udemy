import LabelInput from "./Componentes/LabelInput.jsx";
import Form1 from "./Componentes/Form1";
import "./index.css";

function App() {
	return (
		<>
			<h1 className="flex justify-center mt-8 font-bold uppercase text-5xl mx-4 bg-slate-500 text-white">
				Olá mundo!!
			</h1>
			<Form1 />
			{/* LABEL ENVOLVENDO INPUT */}
			<LabelInput />
		</>
	);
}

export default App;
