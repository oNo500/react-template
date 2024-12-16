import { HttpResponse, http } from 'msw';

import { env } from '@/config/env';

import { networkDelay } from '../utils';

import { authHandlers } from './auth';
import { userHandlers } from './user';
console.log('env.API_URL', env.API_URL);
export const handlers = [
  ...authHandlers,
  ...userHandlers,

  http.get(`${env.API_URL}/healthcheck`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
