"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";
import { AxiosError } from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type ValidationErrorDetail = {
  loc?: (string | number)[];
  msg: string;
  type?: string;
};

export default function AddCategoryModal({ isOpen, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    icon: "",
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
      await api.post("/categories", form); // ✅ JSON body: { name, icon }
      onSuccess();
      onClose();
      setForm({ name: "", icon: "" });
    } catch (err) {
      const axiosError = err as AxiosError<{ detail?: ValidationErrorDetail[] }>;
      console.error("Failed to add category", axiosError);

      const details = axiosError.response?.data?.detail;
      if (Array.isArray(details)) {
        const formatted = details
          .map((d: ValidationErrorDetail) => `${d.loc?.join(".")}: ${d.msg}`)
          .join("\n");
        alert("Validation failed:\n" + formatted);
      } else {
        alert("Unexpected error: " + (axiosError.message || "Unknown error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Category">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          value={form.name}
          label="Category Name"
          placeholder="e.g. Fresh Fruits"
          onChange={handleChange}
          required
        />
        <Input
          name="icon"
          value={form.icon}
          label="Icon (optional)"
          placeholder="e.g. 🍓"
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </Button>
      </form>
    </Modal>
  );
}
