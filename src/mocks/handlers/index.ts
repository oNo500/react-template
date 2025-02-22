import { http, HttpResponse } from "msw";
import { handlers as authHanders } from "./auth";

export const handers = [
  ...authHanders,

  http.get("/healthcheck", async () => {
    return HttpResponse.json({ ok: true });
  }),
];
