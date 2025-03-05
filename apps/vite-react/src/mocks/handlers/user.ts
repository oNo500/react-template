import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/me", async () => {
    return HttpResponse.json({
      code: 0,
      data: {
        name: "viking",
        age: 18,
      },
    });
  }),
];
