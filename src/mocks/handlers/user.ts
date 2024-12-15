import { HttpResponse, http } from "msw";

import { env } from "@/config/env";
import { networkDelay } from "../utils";

type ProfileBody = {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

export const userHandlers = [
  http.get(`${env.API_URL}/user/profile`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
