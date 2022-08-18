import "./index.css";
// Componentes
import StartScreen from "./Componentes/StartScreen";
// React
import {useCallback, useEffect, useState} from 'react';

// Importação dos dados
import wordsList from './data/words';
import Game from "./Componentes/Game";
import GameOver from "./Componentes/GameOver";


const stages = [
	{id: 1, name: "start"},
	{id: 2, name: "game"},
	{id: 3, name: "end"},
]
function App() {
	const [gameStage, setGameStage] = useState(stages[0].name);
	const [words] = useState(wordsList);
	// Starts the game
	const startGame = () => {
		setGameStage(stages[1].name);
	}
	
	// Process the letter input
	const verifyLetter = () => {
		setGameStage(stages[2].name);
	}
	
	// Restarts the game
	const retry = () => {
		setGameStage(stages[0].name);
	}
	return (
		<>
			<div className="App">
				{gameStage === 'start' && <StartScreen startGame={startGame}/>}
				{gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
				{gameStage === 'end' && <GameOver retry={retry}/>}
				
			</div>
		</>
	);
}

export default App;
