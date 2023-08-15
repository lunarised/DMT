import React from "react";
import { Character } from "../characters/characters";
import { getClassColor } from "../characters/classColors";

export const ColoredRectangle = (char: Character) => {
	return (
		<div
			style={{
				backgroundColor: getClassColor(char.class),
			}}
		>
			<p>Character Name: {char.name}</p>

			<p>
				Str: {char.abilityScores.strength}
				{"	"}
				Dex: {char.abilityScores.strength}
				{"	"}
				Con: {char.abilityScores.strength}
				{"	"}
				Int: {char.abilityScores.strength}
				{"	"}
				Wis: {char.abilityScores.strength}
				{"	"}
				Cha: {char.abilityScores.strength}
				{"	"}
			</p>
			<p>Player Name: {char.player}</p>
		</div>
	);
};
