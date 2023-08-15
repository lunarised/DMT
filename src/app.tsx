import * as ReactDOM from "react-dom";
import { ColoredRectangle } from "./components/characterCard";

function render() {
  ReactDOM.render(
    <div>
      <h2>Hello from React!</h2> <ColoredRectangle />{" "}
    </div>,
    document.body
  );
}

render();
