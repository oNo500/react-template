import { type FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import { config as nextJsConfig } from './next.js';

export const config = [...nextJsConfig] satisfies FlatConfig.Config[];
