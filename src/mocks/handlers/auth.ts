import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.post("/login", async ({ request }) => {
    const body = await request.json();
    await delay(3000);
    return HttpResponse.json(body);
  }),
];
