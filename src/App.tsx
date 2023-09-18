import "./App.css";
import { TodoPage } from "./components/TodoPage";

function App() {
  return (
    <div data-testid="container" className="container">
      <h1 className="title">todos</h1>
      <div data-testid="wrapper" className="todo__wrapper">
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
