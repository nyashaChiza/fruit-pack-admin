"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type ValidationDetail = {
  loc?: (string | number)[];
  msg: string;
  type?: string;
};

function isApiValidationError(err: unknown): err is {
  response: { data: { detail: ValidationDetail[] } };
} {
  return (
    typeof err === "object" &&
    err !== null &&
    "response" in err &&
    typeof (err as { response?: { data?: { detail?: unknown } } }).response?.data?.detail !==
  "undefined" &&
Array.isArray(
  (err as { response?: { data?: { detail?: unknown } } }).response?.data?.detail
)

  );
}

export default function AddSupplierModal({ isOpen, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    contact_email: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/suppliers/", form);
      onSuccess();
      onClose();
      setForm({ name: "", contact_email: "", phone_number: "" });
    } catch (err: unknown) {
      console.error("Failed to add supplier", err);

      if (isApiValidationError(err)) {
        const details = err.response.data.detail;
        const formatted = details
          .map((d) => `${d.loc?.join(".")}: ${d.msg}`)
          .join("\n");
        alert("Validation failed:\n" + formatted);
      } else if (err instanceof Error) {
        alert("Unexpected error: " + err.message);
      } else {
        alert("Unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Add Supplier
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Supplier Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Email"
            name="contact_email"
            value={form.contact_email}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Phone Number"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            required
          />
          <div className="pt-2 text-right">
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Add Supplier"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
