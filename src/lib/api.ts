// lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "https://fruit-pack-api.onrender.com";

/**
 * Get the auth token from localStorage (only available on client).
 */
function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

/**
 * Generic API fetch with Bearer token support.
 */
export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit = {},
  requireAuth: boolean = true
): Promise<T> {
  const headers = new Headers(options.headers || {});

  if (requireAuth) {
    const token = getToken();
    if (!token) throw new Error("No auth token found");
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Shortcut methods for GET and POST requests with token injection.
 */
export const api = {
  get: <T = any>(url: string, requireAuth = true) =>
    apiFetch<T>(url, { method: "GET" }, requireAuth),

  post: <T = any>(url: string, body: any, requireAuth = true) =>
    apiFetch<T>(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
      requireAuth
    ),
};
