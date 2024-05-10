import React from "react";
const keys: string[] = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"k",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
type KeyboardProps = {
	disabled?: boolean;
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
};
function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
	disabled = false,
}: KeyboardProps) {
	return (
		<div className="keyboard">
			{keys.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);
				return (
					<button
						onClick={() => addGuessedLetter(key)}
						className="key"
						// className={`${main.key} ${isActive ? main.active : ""} ${isInactive ? main.inactive : ""
						// }`}
						disabled={isInactive || isActive || disabled}
						key={key}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
}

export default Keyboard;
