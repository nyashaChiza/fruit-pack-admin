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
      await api.post("/category", form); // ✅ JSON body: { name, icon }
      onSuccess();
      onClose();
      setForm({ name: "", icon: "" });
    } catch (err: any) {
      console.error("Failed to add category", err);

      const details = err.response?.data?.detail;
      if (details && Array.isArray(details)) {
        const formatted = details
          .map((d: any) => `${d.loc?.join(".")}: ${d.msg}`)
          .join("\n");
        alert("Validation failed:\n" + formatted);
      } else {
        alert("Unexpected error: " + err.message || "Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Add Category
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Category Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Icon (e.g. 🍎 or fa-icon)"
            name="icon"
            value={form.icon}
            onChange={handleChange}
            required
          />
          <div className="pt-2 text-right">
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Add Category"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
