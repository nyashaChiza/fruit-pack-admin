// lib/api.ts
import { jwtDecode } from "jwt-decode"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "https://fruit-pack-api.onrender.com";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

export async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {},
  requireAuth: boolean = true
): Promise<T>  {
  const headers = new Headers(options.headers || {});
  const isFormData = options.body instanceof FormData;

  if (requireAuth) {
    const token = getToken();
    if (!token) throw new Error("No auth token found");
    headers.set("Authorization", `Bearer ${token}`);
  }

  if (!isFormData && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("API error:", {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      error: errorData,
    });
    const message = Array.isArray(errorData.detail)
      ? errorData.detail.map((e: { msg?: string }) => e.msg || JSON.stringify(e)).join(", ")
      : errorData.detail || `API error: ${response.status}`;
    throw new Error(message);
  }

  return response.json();
}

export const api = {
  get: <T = unknown>(url: string, requireAuth = true) =>
    apiFetch<T>(url, { method: "GET" }, requireAuth),

  put: <T = unknown, TBody = unknown>(url: string, body: TBody, requireAuth = true) => {
    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    return apiFetch<T>(
      url,
      {
        method: "PUT",
        body: isFormData ? body : JSON.stringify(body),
      },
      requireAuth
    );
  },

  post: <T = unknown, TBody = unknown>(url: string, body: TBody, requireAuth = true) => {
    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    return apiFetch<T>(
      url,
      {
        method: "POST",
        body: isFormData ? body : JSON.stringify(body),
      },
      requireAuth
    );
  },
};
// 🔐 Auth Helpers
export function getUserIdFromToken(token: string): string | null {
  try {
    const decoded = jwtDecode(token);
    return decoded.sub || null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}


export async function fetchCurrentUser() {
  const token = getToken();
  if (!token) throw new Error("Auth token missing");

  const userId = getUserIdFromToken(token);
  if (!userId) throw new Error("Could not extract user ID from token");

  return await api.get(`/users/${userId}`);
}
