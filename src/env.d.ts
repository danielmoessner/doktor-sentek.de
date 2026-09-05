/// <reference types="astro/client" />

declare module '*.css';

interface Window {
  netlifyIdentity?: {
    on: (event: string, callback: (user?: unknown) => void) => void;
  };
}
