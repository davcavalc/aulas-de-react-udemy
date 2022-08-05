import React from "react";
const FunctionProps = ({ myFunction, myMessage }) => {
	return (
		<>
			<div className="bg-black text-center">
				<button
					className="bg-amber-300 font-bold text-3xl text-slate-900 rounded-md w-[20em]"
					onClick={myFunction}>
					Clique aqui para executar a função
				</button>
			</div>
			<div className="bg-black text-center">
				<button
					className="bg-amber-300 font-bold text-3xl text-slate-900 rounded-md w-[20em]"
					onClick={myMessage}>
					Clique aqui para executar a função 2
				</button>
			</div>
		</>
	);
};

export default FunctionProps;
