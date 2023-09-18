import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

const mockToggleTodo = jest.fn();

const todos = [
  { id: "1", text: "Task 1", completed: false },
  { id: "2", text: "Task 2", completed: true },
];

describe("TodoList component", () => {
  it("should render the todo list correctly", () => {
    render(<TodoList filteredTodos={todos} toggleTodo={mockToggleTodo} />);

    todos.forEach((todo) => {
      const todoText = screen.getByText(todo.text);
      const todoLi = screen.getByTestId(todo.id);

      expect(todoText).toBeInTheDocument();
      expect(todoLi).toBeInTheDocument();
    });
  });
});
