import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/login", async ({ request }) => {
    const info = await request.formData();
    return HttpResponse.json(info);
  }),
];
