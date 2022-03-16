import "./App.css";
import DragAndDrop from "./dnd";
import Header from "./header";

import { BiMessageSquareDetail } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <Header />
      <DragAndDrop />

      <button className="comment-icon">
        <BiMessageSquareDetail />
      </button>
    </div>
  );
}

export default App;
