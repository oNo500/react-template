import { useEffect } from "react";

export const TestMock = () => {
  useEffect(() => {
    console.log("TestMock");
    fetch("/posts").then((res) => {
      console.log("api response", res);
    });
  }, []);
  const fetchPosts = async () => {
    const res = await fetch("/posts").then((res) => res.json());
    console.log("api response", res);
  }
  return <button onClick={fetchPosts}>test mock</button>;
};
