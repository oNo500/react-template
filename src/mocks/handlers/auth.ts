import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/login", async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),
];
