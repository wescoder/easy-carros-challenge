declare module 'hookrouter' {
  export function A(...props: any[]): any
  export function navigate(path: string): void
  export function useRoutes(routes: { [key: string]: (...args: any[]) => any }): any
}
