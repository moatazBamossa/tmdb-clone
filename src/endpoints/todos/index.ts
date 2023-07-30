import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export const getPosts = async () => {
  const result = await axios({
    url: "https://jsonplaceholder.typicode.com/photos",
    headers: {
      "Content-Type": "application/json",
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

export const useGetPosts = (
  opts?: x<
    {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }[]
  >
) => {
  const reactQuer = useQuery({
    QueryKey: ["posts"],
    queryFn: getPosts,
    ...opts,
  });
  return reactQuer;
};
