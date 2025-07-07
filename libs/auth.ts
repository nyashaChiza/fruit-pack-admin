// lib/auth.ts (client-only)

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null; // SSR-safe
  return localStorage.getItem('auth_token');
};

export const setToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('auth_token', token);
};

export const clearToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_token');
};

/**
 * Login helper: sets token and performs any side effects (like redirecting)
 */
export const login = (token: string): void => {
  setToken(token);
  // optional: redirect, show toast, etc.
  // window.location.href = "/dashboard"; // for example
};

/**
 * Logout helper: clears token and performs any side effects
 */
export const logout = (): void => {
  clearToken();
  // optional: redirect, show toast, etc.
  // window.location.href = "/login";
};
