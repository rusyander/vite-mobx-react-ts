import { observer } from "mobx-react-lite";
import React from "react";
import todosMobx from "../store/todos";

interface TodosProps {
  completed: boolean;
  title: string;
  id: number;
}

const Todos = observer((props: TodosProps | any) => {
  const { completed, title, id } = props.todo;

  return (
    <div key={id}>
      <h1>title:{title}</h1>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => todosMobx.update(id)}
      />
      <button onClick={() => todosMobx.delete(id)}>delete</button>
    </div>
  );
});

export default Todos;
