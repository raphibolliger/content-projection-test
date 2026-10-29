import { originOnPort, PARENT_PORT } from '@shared/iframe-protocol';

/** True when the app runs inside an iframe (comparing window.top is allowed cross-origin). */
export const isEmbedded = window.self !== window.top;

/** The only parent the child talks to via postMessage. */
export const PARENT_ORIGIN = originOnPort(PARENT_PORT);
