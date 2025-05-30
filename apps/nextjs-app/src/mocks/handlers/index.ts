import { HttpResponse, http } from 'msw';

import { authHandlers } from './auth';

export const handlers = [
  ...authHandlers,
  http.get('/api/mock', () => {
    return HttpResponse.json({ message: 'test' });
  }),
];
