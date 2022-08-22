import React from "react";

const Game = ({
	verifyLetter,
	pickedWord,
	pickedCategory,
	letters,
	guessedLetters,
	wrongLetters,
	guesses,
	score,
}) => {
	return (
		<>
			<div className="game">
				<div className="points">
					<span className="pointContainer">Pontuação: {score}</span>
				</div>
				<h1 className="title1">Advinhe a palavra:</h1>
				<h3 className="tip">
					Dica sobre a palavra: <span>{pickedCategory}</span>
				</h3>
				<p>Você ainda tem {guesses} tentativa(s).</p>
				<div className="wordContainer">
					{letters.map((letter, i) =>
						guessedLetters.includes(letter) ? (
							<span key={i} className="letter">{letter}</span>
						) : (
							<span key={i} className="blankSquare"></span>
						)
					)}
				</div>
				<div className="letterContainer">
					<p>Tente advinhar uma letra da palavra</p>
					<form action="">
						<input type="text" name="letter" maxLength={1} required />

						<button className="btn">Jogar</button>
					</form>
				</div>
				<div className="wrongLettersContainer">
					<p>Letras já utilizadas</p>
					{wrongLetters.map((letter, i) => (
						<span key={i}>{letter}, </span>
					))}
				</div>
			</div>
		</>
	);
};

export default Game;
