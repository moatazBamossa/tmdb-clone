import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGetTodo, useGetTodos } from "./endpoints/todos";

const getTodos = async () => {
  const res = await axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

function App() {
  const [count, setCount] = useState(0);
  const todos = useGetTodos();
  const todo1 = useGetTodo(1);
  const todo2 = useGetTodo(2);

  console.log("todo1", todo1.data);
  console.log("todo2", todo2);
  // const { data: data1 } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // console.log("data", data);
  // console.log("data1", data1);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-lg">Vite + React</h1>
      <Button variant="destructive">Click me </Button>
      {todos?.data?.map((todo) => (
        <p>{todo.id}</p>
      ))}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
