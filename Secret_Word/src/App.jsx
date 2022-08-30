import "./index.css";
// Componentes
import StartScreen from "./Componentes/StartScreen";
// React
import { useCallback, useEffect, useState } from "react";

// Importação dos dados
import Game from "./Componentes/Game";
import GameOver from "./Componentes/GameOver";
import wordsList from "./data/words";

const stages = [
	{ id: 1, name: "start" },
	{ id: 2, name: "game" },
	{ id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
	const [gameStage, setGameStage] = useState(stages[0].name);
	const [words] = useState(wordsList);
	const [pickedWord, setPickedWord] = useState("");
	const [pickedCategory, setPickedCategory] = useState("");
	const [letters, setLetters] = useState([]);

	const [guessedLetters, setGuessedLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [guesses, setGuesses] = useState(guessesQty);
	const [score, setScore] = useState(0);

	const pickWordAndCategory = useCallback(() => {
		// Pick a random category
		const categories = Object.keys(words);
		const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
		console.log(category);
		// Pick a random word
		const word = words[category][Math.floor(Math.random() * words[category].length)];
		console.log(word);

		return { word, category };
	}, [words]);

	// Starts the game
	const startGame = useCallback(() => {
		// clear all letters
		clearLetterStates();

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
	}, [pickWordAndCategory]);

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
			// setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);
			setGuesses((actualGuesses) => actualGuesses - 1);
		}
	};

	const clearLetterStates = () => {
		setGuessedLetters([]);
		setWrongLetters([]);
	};
	// check if the guesses ended
	useEffect(() => {
		if (guesses <= 0) {
			// reset all states
			clearLetterStates();
			setGameStage(stages[2].name);
		}
	}, [guesses]);

	// Check win condition
	useEffect(() => {
		const uniqueLetters = [...new Set(letters)];

		// win condition
		if (guessedLetters.length === uniqueLetters.length) {
			// add score
			setScore((actualScore) => (actualScore += 100));

			//restart the game with new word
			startGame();
		}
	}, [guessedLetters, letters, startGame]);

	// Restarts the game
	const retry = () => {
		setScore(0);
		setGuesses(guessesQty);
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
				{gameStage === "end" && <GameOver retry={retry} score={score} />}
			</div>
		</>
	);
}

export default App;
