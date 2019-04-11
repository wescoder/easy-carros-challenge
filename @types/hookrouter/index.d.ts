declare module 'hookrouter' {
  export function A(...props: any[]): any
  export function navigate(url: string, replace?: boolean, queryParams?: any): void
  export function useRoutes(routes: { [key: string]: (...args: any[]) => any }): any
}
