import "./App.css";
import DragAndDrop from "./dnd";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <DragAndDrop />

      <button className="comment-icon">
        <i className="fas fa-comment"></i>
      </button>
    </div>
  );
}

export default App;
