import React from "react";

const Game = ({ verifyLetter }) => {
	return (
		<>
            <div className="game">
                <div className="points">
                    <span>Pontuação: 000</span>
                </div>
                <h1>Advinhe a palavra:</h1>
                <h3 className="tip">Dica sobre a palavra: <span>dica...</span></h3>
                <div className="wordContainer">
                    <span className="letter">A</span>
                    <span className="blankSquare"></span>
                </div>
                <div className="letterContainer">
                    <p>Tente advinhar uma letra da palavra</p>
                    <form action="">
                        <label className="flex flex-col gap-3">
                            <input type="text" name="letter" maxLength={1} required />
                            <button className="btn">Jogar</button>
                        </label>
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
