import { setupWorker } from "msw/browser";
import { handers } from "./handlers";

export const worker = setupWorker(...handers);
