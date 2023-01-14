import { useState, useCallback } from "react";
import Todos from "./useCallback-hook/Todos";
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
    
  }, []);


  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <br/>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
