import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./Components/HangmanDrawing";
import Keyboard from "./Components/Keyboard";
import Word from "./Components/Word";
import words from "./wordslist.json";
import "./sass/main.scss";

function App() {
	const [wordtoguess, setWordtoguess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	console.log(wordtoguess);
	const incorrectletters = guessedLetters.filter(
		(letter) => !wordtoguess.includes(letter)
	);
	const isLoser = incorrectletters.length >= 6;
	const isWinner = wordtoguess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;

			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		},
		[guessedLetters, isWinner, isLoser]
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);
	return (
		<div className="hang">
			<div className="text">
				{isWinner && "Winner! - Refresh to try again"}
				{isLoser && "Nice Try - Refresh to try again"}
			</div>
			<HangmanDrawing NumberOfGuesses={incorrectletters.length} />
			<Word
				reveal={isLoser}
				wordToGuess={wordtoguess}
				guessedLetters={guessedLetters}
			/>
			<div style={{ alignSelf: "stretch" }}>
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetters={guessedLetters.filter((letter) =>
						wordtoguess.includes(letter)
					)}
					inactiveLetters={incorrectletters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	);
}

export default App;
