import { http, HttpResponse } from "msw";

const allPosts = new Map();
export const handlers = [
  http.get("/posts", async () => {
    return
    console.log('Captured a "GET /posts" request');
    // const newPost = await request.json();
    return HttpResponse.json(Array.from(allPosts.values()));
  }),
  // 请求参数
  http.post("/posts/:postId", ({request, params, cookies }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id"); // /post/id=abc-123 → id: "abc-123"
    const { postId } = params;
    console.log({ id, postId, cookies });
  }),
  http.delete("/posts/:id", ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
  }),
];
