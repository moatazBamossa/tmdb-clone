import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Movie } from "./types";

export const baseUrl = "https://api.themoviedb.org/3/movie/";
export const baseImgUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
export const coverImgUrl =
  "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

const api_key = "866aa27888a12831b109097d8d33a66e";
const Access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZhYTI3ODg4YTEyODMxYjEwOTA5N2Q4ZDMzYTY2ZSIsInN1YiI6IjY0YzkyZDJiNWNlYTE4MDEwMzJkYWM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L0ts4WOYEGA9EqTWTr8xuXuz6YZlOxyqnjBzhlLWQmA";
const ListTypeMovies: string[] = [
  "now_playing",
  "popular",
  "top_rated",
  "upcoming",
];
export const getMovies = async (org: string) => {
  const res = await axios({
    url: baseUrl + org,
    headers: {
      "Content-Type": "application/json",
      Authorization: Access_token,
    },
    params: {
      api_key,
    },
  });
  return res.data;
};

type x<T> = Omit<
  UseQueryOptions<unknown, unknown, T, QueryKey>,
  "initialData"
> & {
  initialData?: (() => undefined) | undefined;
};
export const useGetMovies = (opts?: x<{ results: Movie[] }>) => {
  const q = useQuery({
    queryKey: ["moves"],
    queryFn: () => getMovies(ListTypeMovies[0]),
    ...opts,
  });
  return q;
};

// const options = {
//   method: "GET",
//   url: "https://api.themoviedb.org/3/movie/now_playing",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZhYTI3ODg4YTEyODMxYjEwOTA5N2Q4ZDMzYTY2ZSIsInN1YiI6IjY0YzkyZDJiNWNlYTE4MDEwMzJkYWM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L0ts4WOYEGA9EqTWTr8xuXuz6YZlOxyqnjBzhlLWQmA",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
