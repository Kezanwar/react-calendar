export const BASE_URL: string =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3002'
    : import.meta.env.API_BASE_URL || 'no-baseurl-found';
