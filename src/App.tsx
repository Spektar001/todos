import "./App.css";
import { TodoPage } from "./components/TodoPage";

function App() {
  return (
    <div className="container">
      <h1 className="title">todos</h1>
      <div className="todo__wrapper">
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
