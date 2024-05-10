import React from "react";
type HangManProps = {
	NumberOfGuesses: number;
};
const Head = <div className="head"></div>;
const Body = <div className="body"></div>;
const RightArm = <div className="right_arm"></div>;
const LeftArm = <div className="left_arm"></div>;
const RightLeg = <div className="right_leg"></div>;
const LeftLeg = <div className="left_leg"></div>;
const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
function HangmanDrawing({ NumberOfGuesses }: HangManProps) {
	return (
		<div className="hangman">
			{BodyParts.slice(0, NumberOfGuesses)}

			<div className="small-horizontal-bar"></div>
			<div className="big-vertical-bar"></div>
			<div className="big-horizontal-bar"></div>
			<div className="small-vertical-bar"></div>
		</div>
	);
}

export default HangmanDrawing;
