import "./App.scss";
import KanBanDnd from "./kanBanDnD";
import { BiMessageSquareDetail } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <KanBanDnd />
      <button className="comment-icon">
        <BiMessageSquareDetail />
      </button>
    </div>
  );
}

export default App;
