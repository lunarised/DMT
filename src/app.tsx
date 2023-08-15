import * as ReactDOM from "react-dom";
import { ColoredRectangle } from "./components/characterCard";
import { Character } from "./characters/characters";
import { AdventureView } from "./adventure";

function render() {
	let brian: Character = {
		race: "human",
		name: "brian",
		class: "ranger",
		player: "rory",
		abilityScores: {
			strength: 20,
			dexterity: 20,
			intelligence: 20,
			wisdom: 20,
			charisma: 20,
			constitution: 20,
		},
	};
	type AdventureState = {
		players: Character[];
		activeNPCs: Character[];
	};

	let adventureState: AdventureState = { players: [], activeNPCs: [] };

	ReactDOM.render(
		<div>
			<h2>Hello from React!</h2> <AdventureView {...adventureState} />{" "}
		</div>,
		document.body
	);
}

render();
