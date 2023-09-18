import { FormEvent } from "react";

type TodoFormProps = {
  text: string;
  setText: (text: string) => void;
  handleFormSubmit: (e: FormEvent) => void;
  empty: boolean;
};

export const TodoForm = ({
  text,
  setText,
  handleFormSubmit,
  empty,
}: TodoFormProps) => {
  return (
    <form className="todo__form" onSubmit={handleFormSubmit}>
      <input
        className={empty ? "form__input alert" : "form__input"}
        placeholder={
          empty ? "Please write your task..." : "What needs to be done?"
        }
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="form__btn btn" type="submit">
        Add
      </button>
    </form>
  );
};
