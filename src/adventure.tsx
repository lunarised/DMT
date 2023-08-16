import { observable } from "mobx";
import { Character } from "./characters/characters";
import { ColoredRectangle } from "./components/characterCard";
import { DataModel } from "./dataModel";
import { observer } from "mobx-react";

type AdventureState = {
  players: Character[];
  activeNPCs: Character[];
};

let adventureState: AdventureState = observable({
  players: [],
  activeNPCs: [],
});

export const loadPlayer = (player: Character) => {
  DataModel.sharedInstance().characters.push(player);
};

const loadActiveNPC = (npc: Character) => {
  adventureState.activeNPCs.push(npc);
};

export const AdventureView = observer(() => {
  let p = DataModel.sharedInstance().characters;
  console.log("RONDER");
  return <div>{p.toString()}</div>;
});
