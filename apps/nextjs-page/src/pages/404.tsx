import Link from "next/link";

// TODO: 这里为什么没有匹配 404 呢？而是只能命中路由 404 页面
const NotFoundPage = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404</h1>
      <p>Not Found</p>
      <Link href="/">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
