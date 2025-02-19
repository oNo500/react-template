import { useEffect } from "react";

export const TestMock = () => {
  useEffect(() => {
    console.log("TestMock");
    fetch("/posts").then(async (res) => {
      const data = await res.json();
      console.log("api response", data);
    });
  }, []);
  const fetchPosts = async () => {
    const res = await fetch("/posts",{
        method: 'POST',
    }).then((res) => res.json());
    console.log("api response", res);
  };
  return <button onClick={fetchPosts}>test mock</button>;
};
