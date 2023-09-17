import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div className="container">
      <h1 className="title">todos</h1>
      <div className="todo__wrapper">
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
