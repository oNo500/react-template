import { createMiddleware } from '@mswjs/http-middleware';
import cors from 'cors';
import express, { json } from 'express';
import logger from 'pino-http';

import { env } from '@/config/env';

import { handlers } from './handlers';

const app = express();

app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
  }),
);

app.use(json());
app.use(
  logger({
    level: 'info',
    redact: ['req.headers', 'res.headers'],
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: true,
      },
    },
  }),
);
app.use(createMiddleware(...handlers));

app.listen(env.MOCK_PORT, () => {
  console.log(`Mock API server started at http://localhost:${env.MOCK_PORT}`);
});
