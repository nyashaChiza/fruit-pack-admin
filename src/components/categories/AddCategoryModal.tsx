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
      await api.post("/categories", form);
      onSuccess();
      onClose();
      setForm({ name: "", icon: "" });
    } catch (err) {
      const axiosError = err as {
        message: string;
        detail?: ValidationErrorDetail[];
      };

      const details = axiosError.detail;
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Add New Category
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Create a new category to organize your products. You can add an emoji icon for visual flair.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <Input
            name="name"
            value={form.name}
            placeholder="e.g. Fresh Fruits"
            onChange={handleChange}
            required
          />
          <Input
            name="icon"
            value={form.icon}
            placeholder="e.g. 🍓"
            onChange={handleChange}
          />

          <div className="flex justify-center space-x-4 pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-green-600 hover:bg-green-700"
            >
              {loading ? "Adding..." : "➕ Add Category"}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}