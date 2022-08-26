import "./index.css";
// Componentes
import StartScreen from "./Componentes/StartScreen";
// React
import { useState } from "react";

// Importação dos dados
import Game from "./Componentes/Game";
import GameOver from "./Componentes/GameOver";
import wordsList from "./data/words";

const stages = [
	{ id: 1, name: "start" },
	{ id: 2, name: "game" },
	{ id: 3, name: "end" },
];
function App() {
	const [gameStage, setGameStage] = useState(stages[0].name);
	const [words] = useState(wordsList);
	const [pickedWord, setPickedWord] = useState("");
	const [pickedCategory, setPickedCategory] = useState("");
	const [letters, setLetters] = useState([]);

	const [guessedLetters, setGuessedLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [guesses, setGuesses] = useState(3);
	const [score, setScore] = useState(0);

	const pickWordAndCategory = () => {
		// Pick a random category
		const categories = Object.keys(words);
		const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
		console.log(category);
		// Pick a random word
		const word = words[category][Math.floor(Math.random() * words[category].length)];
		console.log(word);

		return { word, category };
	};

	// Starts the game
	const startGame = () => {
		// Pick word and pick category
		const { word, category } = pickWordAndCategory();

		// Create an array of letters
		let wordLetters = word.split("");

		wordLetters = wordLetters.map((l) => l.toLowerCase());

		console.log(word, category);
		console.log(wordLetters);

		// Fill states
		setPickedWord(word);
		setPickedCategory(category);
		setLetters(wordLetters);

		setGameStage(stages[1].name);
	};

	// Process the letter input
	const verifyLetter = (letter) => {
		const normalizedLetter = letter.toLowerCase();
		// Check if letter has already been utilized
		if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
			return;
		}
		// push guessedLetter or remove a guess
		if (letters.includes(normalizedLetter)) {
			setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter]);
		} else {
			setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);
		}

	};
	
	console.log(guessedLetters);
	console.log(wrongLetters);
	// Restarts the game
	const retry = () => {
		setGameStage(stages[0].name);
	};
	return (
		<>
			<div className="App">
				{gameStage === "start" && <StartScreen startGame={startGame} />}
				{gameStage === "game" && (
					<Game
						verifyLetter={verifyLetter}
						pickedWord={pickedWord}
						pickedCategory={pickedCategory}
						letters={letters}
						guessedLetters={guessedLetters}
						wrongLetters={wrongLetters}
						guesses={guesses}
						score={score}
					/>
				)}
				{gameStage === "end" && <GameOver retry={retry} />}
			</div>
		</>
	);
}

export default App;
