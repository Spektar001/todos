import { fireEvent, render, screen } from "@testing-library/react";
import { TodoPage } from "./TodoPage";

describe("TodoPage component", () => {
  it("should add a new todo when the form is submitted with non-empty text", () => {
    render(<TodoPage />);

    const todoInput = screen.getByTestId("input");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(todoInput, { target: { value: "New todo item" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText("New todo item");
    expect(todoItem).toBeInTheDocument();
  });

  it("should not add a new todo when the form is submitted with empty text", () => {
    render(<TodoPage />);

    const todoInput = screen.getByTestId("input");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(todoInput, { target: { value: "" } });
    fireEvent.click(addButton);

    const emptyErrorMessage = screen.getByPlaceholderText(
      "Please write your task..."
    );
    expect(emptyErrorMessage).toBeInTheDocument();

    expect(screen.queryByText("New todo item")).not.toBeInTheDocument();
  });

  it("should filter the todos based on the selected filter", () => {
    render(<TodoPage />);

    const todoInput = screen.getByTestId("input");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(todoInput, { target: { value: "Todo 1" } });
    fireEvent.click(addButton);

    fireEvent.change(todoInput, { target: { value: "Todo 2" } });
    fireEvent.click(addButton);

    fireEvent.change(todoInput, { target: { value: "Todo 3" } });
    fireEvent.click(addButton);

    const allFilterButton = screen.getByRole("button", { name: "All" });
    const activeFilterButton = screen.getByRole("button", { name: "Active" });
    const completedFilterButton = screen.getByRole("button", {
      name: "Completed",
    });

    fireEvent.click(activeFilterButton);

    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
    expect(screen.getByText("Todo 3")).toBeInTheDocument();

    fireEvent.click(completedFilterButton);

    expect(screen.queryByText("Todo 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Todo 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Todo 3")).not.toBeInTheDocument();

    fireEvent.click(allFilterButton);

    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
    expect(screen.getByText("Todo 3")).toBeInTheDocument();
  });

  it('should delete completed todos when the "Clear completed" button is clicked', () => {
    render(<TodoPage />);

    const todoInput = screen.getByTestId("input");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(todoInput, { target: { value: "Todo 1" } });
    fireEvent.click(addButton);

    const todo1Checkbox = screen.getByTestId("checkbox");
    const clearCompletedButton = screen.getByRole("button", {
      name: "Clear completed",
    });

    fireEvent.click(todo1Checkbox);
    fireEvent.click(clearCompletedButton);

    expect(screen.queryByText("Todo 1")).not.toBeInTheDocument();
  });
});
