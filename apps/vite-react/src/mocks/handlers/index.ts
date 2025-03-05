import { delay, http, HttpResponse } from "msw";
import { handlers as authHanders } from "./auth";
import { handlers as userHanders } from "./user";

export const handers = [
  http.all("*", async () => {
    // 全局延迟 1s
    await delay(1000);
  }),
  ...authHanders,
  ...userHanders,
  http.get("/healthcheck", async () => {
    return HttpResponse.json({ ok: true });
  }),
];
