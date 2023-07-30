import axios from "axios";
import {
  Authorization,
  AuthorizationMovie,
  useGetPosts,
} from "./endpoints/todos/index";
import { useGetMovies } from "./endpoints/movies";
import { Card } from "./components/ui/Card/card";

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
  // const [count, setCount] = useState(0);
  // const todos = useGetTodos();
  // const todo1 = useGetTodo(1);
  // const todo2 = useGetTodo(2);
  // const getPosts = useGetPosts(2);
  // const Aut = Authorization();
  // console.log("Aut", Aut);
  // console.log("Aut", Aut);
  // console.log("getPosts", getPosts);

  // const { data: data1 } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  // console.log("data", data);
  // console.log("data1", data1);
  const getMovies = useGetMovies();
  console.log("getMovies", getMovies?.data?.results);
  return (
    <>
      {/* <Header
        items={["home", "detailes", "about"]}
        pic={
          "https://www.clipartmax.com/png/middle/8-88403_size-movie-icon.png"
        }
      /> */}
      <div className="Cards">
        {getMovies?.data?.results?.map((item) => (
          <Card
            img=""
            title={item?.original_title}
            name={item?.id.toString()}
            type={item?.vote_average.toString()}
          />
        ))}
      </div>

      {/* {todos?.data?.map((todo) => (
        <p>{todo.title}</p>
      ))} */}
    </>
  );
}

export default App;
