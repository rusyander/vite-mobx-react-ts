import "./App.css";
import counter from "./store/counter";
import { observer } from "mobx-react-lite";
import TodosAll from "./components/TodosAll";

const App = observer(() => {
  return (
    <>
      <h1>counter</h1>
      <h1>{counter.count}</h1>
      <h1>{counter.total}</h1>
      <button onClick={() => counter.incriment()}>incriment</button>
      <button onClick={() => counter.decriment()}>dicrement</button>
      <TodosAll />
    </>
  );
});

export default App;
