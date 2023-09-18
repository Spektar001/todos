import React, { useState } from "react";
import { Button } from "./Button";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./TodoPage.css";

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  const [empty, setEmpty] = useState(false);

  const addTodo = () => {
    setEmpty(false);
    if (text.trim().length) {
      setTodos((prevTodo) => [
        ...prevTodo,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    } else {
      setEmpty(true);
    }
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
      <TodoForm
        text={text}
        setText={setText}
        handleFormSubmit={handleFormSubmit}
        empty={empty}
      />
      <TodoList toggleTodo={toggleTodo} filteredTodos={filteredTodos} />
      <div className="footer">
        <p className="count__info">
          <span className="count">{countUncompletedTodos}</span> items left
        </p>
        <div className="filter__bar">
          <Button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "btn active" : "btn"}
          >
            All
          </Button>
          <Button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "btn active" : "btn"}
          >
            Active
          </Button>
          <Button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "btn active" : "btn"}
          >
            Completed
          </Button>
        </div>
        <Button className="clear__btn btn" onClick={deleteCompletedTodos}>
          Clear completed
        </Button>
      </div>
    </>
  );
};
