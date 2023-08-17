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

(window as any).electronAPI.loadState((event, value: { player: string }) => {
  loadPlayer(value.player);
});

export const loadPlayer = (player: Character) => {
  DataModel.sharedInstance().characters.push(player);
};

const loadActiveNPC = (npc: Character) => {
  adventureState.activeNPCs.push(npc);
};
export const Buttyon = () => {
  return (
    <button onClick={() => DataModel.sharedInstance().numbers.push(420)}>
      Hi
    </button>
  );
};

export const Buttyoni = () => {
  return (
    <button
      onClick={() => {
        DataModel.sharedInstance().recent =
          DataModel.sharedInstance().numbers.at(-1);

        console.log(DataModel.sharedInstance().recent);
      }}
    >
      Hippo
    </button>
  );
};

export const AdventureView = observer(() => {
  let p = DataModel.sharedInstance().numbers;
  console.log("RONDER");
  return (
    <div>
      <Buttyon />
      <Buttyoni />
      {p.toString()}
    </div>
  );
});
