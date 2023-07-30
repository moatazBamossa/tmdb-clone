import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGetTodo, useGetTodos } from "./endpoints/todos";
import { Header } from "./Header/header";
import { Card } from "./components/ui/Card/card";
import { useGetPosts } from "./endpoints/todos/index";

// const getTodos = async () => {
//   const res = await axios({
//     url: "https://jsonplaceholder.typicode.com/todos",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return res.data;
// };

function App() {
  const [count, setCount] = useState(0);
  const todos = useGetTodos();
  const todo1 = useGetTodo(1);
  const todo2 = useGetTodo(2);
  const getPosts = useGetPosts();

  // const { data: data1 } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // console.log("data", data);
  // console.log("data1", data1);
  return (
    <>
      {/* <Header
        items={["home", "detailes", "about"]}
        pic={
          "https://www.clipartmax.com/png/middle/8-88403_size-movie-icon.png"
        }
      /> */}
      <div className="Cards">
        <Card />
      </div>

      {/* {todos?.data?.map((todo) => (
        <p>{todo.title}</p>
      ))} */}
    </>
  );
}

export default App;
