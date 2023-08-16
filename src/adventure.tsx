import { observable } from "mobx";
import { Character } from "./characters/characters";
import { ColoredRectangle } from "./components/characterCard";

type AdventureState = {
  players: Character[];
  activeNPCs: Character[];
};

let adventureState: AdventureState = observable({
  players: [],
  activeNPCs: [],
});

export const loadPlayer = (player: Character) => {
  adventureState.players.push(player);
};

const loadActiveNPC = (npc: Character) => {
  adventureState.activeNPCs.push(npc);
};

export const AdventureView = () => {
  const renderPlates = () => {
    return adventureState.players.map((player) => {
      return <p> Howdy </p>;
    });
  };

  return <div>{renderPlates()}</div>;
};
