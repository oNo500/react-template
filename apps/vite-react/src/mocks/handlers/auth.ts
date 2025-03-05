import { http, HttpResponse } from "msw";

export const handlers = [
  // 登录
  http.post("/login", async () => {
    return HttpResponse.json({
      code: 0,
      data: {
        accessToken: "123456",
        user: {
          name: "viking",
          age: 18,
        },
      },
    });
  }),
  // 注册
  http.post("/register", async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({
      code: 0,
      data: {
        body, // just for test
        accessToken: "123456",
        user: {
          name: "viking",
          age: 18,
        },
      },
    });
  }),
];
