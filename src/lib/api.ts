// lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "https://fruit-pack-api.onrender.com";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit = {},
  requireAuth: boolean = true
): Promise<T> {
  const headers = new Headers(options.headers || {});
  const isFormData = options.body instanceof FormData;

  if (requireAuth) {
    const token = getToken();
    if (!token) throw new Error("No auth token found");
    headers.set("Authorization", `Bearer ${token}`);
  }

  // ❌ Don't set JSON headers if it's multipart/form-data
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
      ? errorData.detail.map((e) => e.msg || JSON.stringify(e)).join(", ")
      : errorData.detail || `API error: ${response.status}`;
    throw new Error(message);
  }

  return response.json();
}

export const api = {
  get: <T = any>(url: string, requireAuth = true) =>
    apiFetch<T>(url, { method: "GET" }, requireAuth),
  put: <T = any>(url: string, body: any, requireAuth = true) => {
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

  post: <T = any>(url: string, body: any, requireAuth = true) => {
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
