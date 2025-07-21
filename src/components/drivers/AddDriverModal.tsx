"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

// Modal props
type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddDriverModal({ isOpen, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    email: "",
    username: "",
    full_name: "",
    password: "",
    vehicle_number: "",
    status: "available",
    is_active: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

type ValidationDetail = {
  loc?: (string | number)[];
  msg: string;
  type?: string;
};

type ApiErrorResponse = {
  response: {
    data: {
      detail: ValidationDetail[];
    };
  };
};

function isApiValidationError(err: unknown): err is ApiErrorResponse {
  return (
    typeof err === "object" &&
    err !== null &&
    "response" in err &&
    typeof (err as Record<string, unknown>).response === "object" &&
    Array.isArray((err as ApiErrorResponse).response?.data?.detail)
  );
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1. Create user
    const userPayload = {
      email: form.email,
      username: form.username,
      full_name: form.full_name,
      is_active: true,
      role: "driver",
      password: form.password,
    };

    const userRes = await api.post("/users/", userPayload);

    // Support flexible backend response shape
    const userId: number | undefined =
      (userRes as { id?: number })?.id ??
      (userRes as { user?: { id?: number } })?.user?.id;

    if (!userId) {
      throw new Error("User creation failed: No ID returned");
    }

    // 2. Create driver with the user ID
    const driverPayload = {
      vehicle_number: form.vehicle_number,
      is_active: true,
      status: form.status || "available",
      user_id: userId,
    };
    await api.post("/drivers", driverPayload);

    onSuccess();
    onClose();
    setForm({
      email: "",
      username: "",
      full_name: "",
      password: "",
      vehicle_number: "",
      status: "available",
      is_active: true,
    });
  } catch (err: unknown) {
    console.error("❌ Failed to add driver:", err);

    if (isApiValidationError(err)) {
      const details = err.response.data.detail;
      const formatted = details
        .map((d) => `${d.loc?.join(".")}: ${d.msg}`)
        .join("\n");
      alert("Validation failed:\n" + formatted);
    } else if (err instanceof Error) {
      alert("Unexpected error: " + err.message);
    } else {
      alert("Unexpected unknown error");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Add Driver
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
          <Input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} required />
          <Input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
          <Input name="vehicle_number" placeholder="Vehicle Number" value={form.vehicle_number} onChange={handleChange} required />
          <Input name="status" placeholder="Status (e.g. available)" value={form.status} onChange={handleChange} required />

          <div className="pt-2 text-right">
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Add Driver"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
