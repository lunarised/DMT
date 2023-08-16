import { createRoot } from "react-dom/client";
import { DataModel } from "./dataModel";
import { render } from "react-dom";
import { Character } from "./characters/characters";
import { AdventureView } from "./adventure";
const domNode = document.getElementById("root");
const root = createRoot(domNode);

let model = DataModel.sharedInstance();

// @computed
// const renderYos = (characters: Character[]) => {
//   let output: string;
//   characters.map((character) => {
//     output + "<p> Helllo </p>";
//   });
//   return output;
// };

root.render(
  <div>
    <AdventureView />
  </div>
);
