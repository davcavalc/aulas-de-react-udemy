import React from "react";

const StartScreen = () => {
	return (
		<>
			<div className="flex items-center flex-col">
				<h1 className="text-[3.5em] font-bold">Secret Word</h1>
				<p className="mb-[2em] text-startScreen text-xl">Clique no botão para jogar</p>
				<button className="btn shadow-md shadow-black">Começar o jogo</button>
			</div>
		</>
	);
};

export default StartScreen;
