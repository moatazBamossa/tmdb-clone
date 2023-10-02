import { baseImgUrl, useGetMovies } from "./endpoints/movies";
import { NextUIProvider } from "@nextui-org/react";
import Mod from "./body/home";
import NavbarPage from "./Header/NavBar/NavBar";
import CardPage from "./components/ui/Card2/Card";
import "./App.css";
import { useState } from "react";
import { getDocs } from "firebase/firestore";
import { colRef } from ".";
function App() {
  const getMovies = useGetMovies();
  console.log("getMovies", getMovies?.data?.results);
  const [dataSearch, setDataSearch] = useState("");
  const data = getMovies?.data?.results;

  getDocs(colRef).then((snapShot) => {
    const books = [];
    snapShot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log("books", books);
  });
  const handelData = (value: string) => {
    setDataSearch(value);
  };

  return (
    <NextUIProvider>
      <NavbarPage dataSearch={dataSearch} handelData={handelData} />
      <div
        className="gap-5 grid grid-cols-2 sm:grid-cols-6 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ padding: 25, background: "text-customColor" }}
      >
        {data
          ?.filter((item) =>
            item.title.toUpperCase().includes(dataSearch.toUpperCase())
          )
          .map((item) => (
            <CardPage
              title={item.title}
              img={baseImgUrl + item.poster_path}
              price={item.vote_average}
              subTitle={item.overview}
            />
          ))}
      </div>
      <Mod />
    </NextUIProvider>
  );
}

export default App;
