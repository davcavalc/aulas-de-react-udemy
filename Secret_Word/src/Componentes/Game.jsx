import React from "react";

const Game = ({ verifyLetter }) => {
	return (
		<>
			<div className="game">
				<div className="points">
					<span className="pointContainer">Pontuação: 000</span>
				</div>
				<h1 className="title1">Advinhe a palavra:</h1>
				<h3 className="tip">
					Dica sobre a palavra: <span>dica...</span>
				</h3>
				<div className="wordContainer">
					<span className="letter">A</span>
					<span className="blankSquare"></span>
				</div>
				<div className="letterContainer">
					<p>Tente advinhar uma letra da palavra</p>
					<form action="">
						<input type="text" name="letter" maxLength={1} required />
						<input type="text" name="letter" maxLength={1} required />
						<button className="btn">Jogar</button>
					</form>
				</div>
				<div className="wrongLettersContainer">
					<p>Letras já utilizadas</p>
					<span>b,</span>
					<span>a,</span>
				</div>
			</div>
		</>
	);
};

export default Game;
