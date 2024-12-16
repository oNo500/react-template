import { HttpResponse, http } from 'msw';

import { env } from '@/config/env';
import { networkDelay } from '../utils';

export const userHandlers = [
  http.get(`${env.API_URL}/user/profile`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
