import React, { useState } from "react";
import "./TodoForm.css";

export const TodoForm = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos((prevTodo) => [
        ...prevTodo,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText("");
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo();
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const countUncompletedTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <form className="todo__form" onSubmit={handleFormSubmit}>
        <input
          className="form__input"
          placeholder="What needs to be done?"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="form__btn btn" onClick={addTodo} type="submit">
          Add
        </button>
      </form>
      <ul className="todo__list">
        {filteredTodos.map((todo) => (
          <li className="todo__item" key={todo.id}>
            <input
              id={todo.id}
              className="custom-checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <label htmlFor={todo.id} className="checkbox-label"></label>
            <span
              className={todo.completed ? "todo__text completed" : "todo__text"}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="footer">
        <p className="count__info">
          <span className="count">{countUncompletedTodos}</span> items left
        </p>
        <div className="filter__bar">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "btn active" : "btn"}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "btn active" : "btn"}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "btn active" : "btn"}
          >
            Completed
          </button>
        </div>
        <button className="clear__btn btn" onClick={deleteCompletedTodos}>
          Clear completed
        </button>
      </div>
    </>
  );
};
