declare module 'react-dom/client' {
  import type { ReactNode } from 'react';
  import type { Root as ReactRoot } from 'react-dom';

  export interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  export function createRoot(container: Element | DocumentFragment): Root;
}
