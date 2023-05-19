import React, { useEffect } from "react";
import Todos from "./Todos";
import todosMobx from "../store/todos";
import { observer } from "mobx-react-lite";

const TodosAll = observer(() => {
  useEffect(() => {
    todosMobx.allTodos();
  }, []);

  return (
    <div>
      <button onClick={() => todosMobx.allTodos()}>fetch</button>
      {todosMobx.todosList?.map((t) => (
        <Todos key={t.id} todo={t} />
      ))}
    </div>
  );
});

export default TodosAll;
