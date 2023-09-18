import { render, screen } from "@testing-library/react";
import App from "./App";
import { TodoPage } from "./components/TodoPage";

test("renders title correctly", () => {
  render(<App />);
  expect(screen.getByText("todos")).toBeInTheDocument();
});

test("renders container element with correct class", () => {
  render(<App />);
  expect(screen.getByTestId("container")).toHaveClass("container");
});

test("renders wrapper element", () => {
  render(<App />);
  expect(screen.getByTestId("wrapper")).toBeInTheDocument();
});

test("renders TodoPage component", () => {
  render(<TodoPage />);
  expect(screen.getByText("Clear completed")).toBeInTheDocument();
});
