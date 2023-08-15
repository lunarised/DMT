import { Character } from "./characters/characters";
import { ColoredRectangle } from "./components/characterCard";

type AdventureState = {
	players: Character[];
	activeNPCs: Character[];
};

let adventureState: AdventureState = { players: [], activeNPCs: [] };

export const loadPlayer = (player: Character) => {
	adventureState.players.push(player);
};

const loadActiveNPC = (npc: Character) => {
	adventureState.activeNPCs.push(npc);
};

const playerPlates = [];

export const AdventureView = (props: AdventureState) => {
	const renderPlates = () => {
		return props.players.map((player) => {
			return <ColoredRectangle {...player} />;
		});
	};

	return <div>{renderPlates()}</div>;
};
