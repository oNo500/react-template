import { delay, http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const handlers = [
  http.post("/login", async ({ request }) => {
    const info = await request.formData();
    return HttpResponse.json(info);
  }),
  // 查询请求头信息
  http.get("/headers", async ({ request }) => {
    const headers = Object.fromEntries(request.headers.entries());
    // or
    const acceptValue = request.headers.get("accept");
    return HttpResponse.json({ headers, acceptValue });
  }),
  // 路径参数：/user/:id
  http.get("/user/:id", async ({ params }) => {
    const { id } = params;
    return HttpResponse.json({ id });
  }),
  // 查询参数：/user?id=123
  http.get("/user", async ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const ids = url.searchParams.getAll("id");
    return HttpResponse.json({ id, ids });
  }),
  // 请求体 body
  http.post("/user", async ({ request }) => {
    const body = await request.json();
    const formData = await request.formData();

    return HttpResponse.json({body, formData});
  }),
  // 延迟响应
  http.get("/delay", async () => {
    await delay(3000);
    return HttpResponse.json({ message: "delay 3s" });
  }),
  // 模拟网络错误
  http.get("/error", () => {
    return HttpResponse.error();
  }),
  // 模拟错误
  http.get("/apples", () => {
    return new HttpResponse(null, {
      status: 403,
      statusText: "Out Of Apples",
      headers: { // 随便写的示例
        "Set-Cookie": "mySecret=abc-123",
        "X-Custom-Header": "yes",
      },
    });
  }),
  // 动态响应:有可能依赖另一套鉴权系统，暂时忽略
];

const worker = setupWorker(...handlers);
// 覆盖响应（应急测试）
worker.use(
  http.get("/apples", () => {
    return HttpResponse.text("hello world");
  })
  // ...more
);
worker.start();
