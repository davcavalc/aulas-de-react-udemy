import React from "react";

const GameOver = ({ retry, score }) => {
	return (
		<>
			<div className="flex flex-col justify-center">
				{""}
				<h1>Fim de jogo!!</h1>
				<p>
					A sua pontuação foi: <span className="text-[#ecfa00] text-[1.5em]">{score}</span>
				</p>
				<button className="btn" onClick={retry}>
					Resetar o jogo
				</button>
			</div>
		</>
	);
};

export default GameOver;
