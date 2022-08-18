import React from "react";

const Game = ({ verifyLetter }) => {
	return (
		<>
			<div className="flex flex-col justify-center">
                <h1>Game</h1>
                <button className="btn" onClick={verifyLetter}>
                    Finalizar o jogo
                </button>
            </div>
		</>
	);
};

export default Game;
