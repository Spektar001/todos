type TodosProps = {
  filteredTodos: Todos[];
  toggleTodo: (id: string) => void;
};

export const TodoList = ({ toggleTodo, filteredTodos }: TodosProps) => {
  return (
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
  );
};
