import React, { useEffect } from "react";
import useSWR from "swr";
export const child = () => {
  return "child";
};

const Parent = () => {
  const fetcher = async (...arg) => {
    return await (await fetch(...arg)).json();
  };
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );
  if (error) return <p>faild</p>;
  if (!data) return <p>loading</p>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Parent;
