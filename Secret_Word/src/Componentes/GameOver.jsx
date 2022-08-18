import React from "react";

const GameOver = ({ retry }) => {
	return (
		<>
            <div className="flex flex-col justify-center">
                {""}
				<h1>Game Over</h1>
				<button className="btn" onClick={retry}>
					Resetar o jogo
				</button>
			</div>
		</>
	);
};

export default GameOver;
