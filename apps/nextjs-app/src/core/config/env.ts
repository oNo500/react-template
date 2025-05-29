import 'dotenv/config';
import * as z from 'zod';

const createEnv = () => {
  const envSchema = z.object({
    API_URL: z.string().url(),
    NODE_ENV: z.string(),
  });
  const envVars = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV,
  };
  const parsedEnv = envSchema.safeParse(envVars);
  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
    The following variables are missing or invalid:
    ${Object.entries(parsedEnv.error.flatten().fieldErrors)
      .map(([k, v]) => `- ${k}: ${v}`)
      .join('\n')}
    `,
    );
  }
  return parsedEnv.data ?? {};
};

export const env = createEnv();
