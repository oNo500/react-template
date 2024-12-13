/// <reference types="vite/client" />

interface ImportMateEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_ENABLE_API_MOCKING: string;
}

interface ImportMate {
  readonly env: ImportMateEnv;
}
