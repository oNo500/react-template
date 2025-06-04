import * as z from 'zod';

const createEnv = () => {
  const envSchema = z.object({
    API_URL: z.string().url(),
    MODE: z.enum(['development', 'production', 'test']),
    ENABLE_MOCK: z
      .string()
      .refine((e) => e === 'true' || e === 'false')
      .default('false'),
  });
  const envVars = Object.entries(import.meta.env).reduce<Record<string, string>>((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_')) {
      acc[key.slice(5)] = value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
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
