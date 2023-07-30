import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseImgUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
export const coverImgUrl =
  "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";
const baseUrl = "https://api.themoviedb.org/3/";
const api_key = "866aa27888a12831b109097d8d33a66e";
const Access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZhYTI3ODg4YTEyODMxYjEwOTA5N2Q4ZDMzYTY2ZSIsInN1YiI6IjY0YzkyZDJiNWNlYTE4MDEwMzJkYWM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L0ts4WOYEGA9EqTWTr8xuXuz6YZlOxyqnjBzhlLWQmA";
export const getTodos = async () => {
  const res = await axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const getTodo = async (id: number) => {
  const res = await axios({
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const getPosts = async (org: string, page?: number) => {
  const result = await axios({
    url: baseUrl + org + page,
    headers: {
      "Content-Type": "application/json",
      Authorization: Access_token,
    },
    params: {
      api_key,
    },
  });
  return result.data;
};

type x<T> = Omit<
  UseQueryOptions<unknown, unknown, T, QueryKey>,
  "initialData"
> & {
  initialData?: (() => undefined) | undefined;
};

export const useGetTodos = (opts?: x<{ id: number }[]>) => {
  const q = useQuery({ queryKey: ["todos"], queryFn: getTodos, ...opts });
  return q;
};

export const useGetTodo = (id: number, opts?: x<{ id: number }>) => {
  const q = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
    ...opts,
  });
  return q;
};

export const AuthorizationMovie = () => {
  const reactQuer = useQuery({
    queryKey: ["Authorization"],
    queryFn: () => getPosts("movie/"),
  });
  return reactQuer;
};

export const useGetPosts = (page: number, opts?: x<{ id: number }>) => {
  const reactQuer = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts("movie/", page),
    ...opts,
  });
  return reactQuer;
};

// Authorization

export const Authorization = async () => {
  const access = await axios({
    url: "https://api.themoviedb.org/3/authentication",
    headers: {
      Accept: "application/json",
      Authorization: Access_token,
    },
  });
  return access;
};
export const useAuthorization = () => {
  const reactQuer = useQuery({
    queryKey: ["Authorization"],
    queryFn: () => Authorization(),
  });
  return reactQuer;
};
