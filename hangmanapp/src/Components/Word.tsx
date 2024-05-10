import React from "react";

type HangManWordProps = {
	wordToGuess: string;
	guessedLetters: string[];
	reveal?: boolean;
};

function Word({
	wordToGuess,
	guessedLetters,
	reveal = false,
}: HangManWordProps) {
	return (
		<div className="word">
			{wordToGuess.split("").map((letter, index) => (
				<span className="letter" key={index}>
					<span
						style={{
							visibility: guessedLetters.includes(letter)
								? "visible"
								: "hidden",
							color:
								!guessedLetters.includes(letter) && reveal ? "red" : "black",
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}

export default Word;
