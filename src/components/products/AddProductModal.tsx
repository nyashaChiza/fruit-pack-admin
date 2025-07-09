"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";
import FileInput from "../form/input/FileInput";


type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddProductModal({ isOpen, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    supplier_id: "",
    category_id: "",
    price: "",
    stock: "",
    unit: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);

useEffect(() => {
  if (!isOpen) return; // Only fetch when modal is shown

  api.get("/suppliers")
    .then(setSuppliers)
    .catch((err) => console.error("Failed to fetch suppliers", err));

  api.get("/categories")
    .then(setCategories)
    .catch((err) => console.error("Failed to fetch categories", err));
}, [isOpen]);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData();

  // Required fields
  formData.append("name", form.name);
  formData.append("description", form.description || ""); // Optional but must be a string
  formData.append("supplier_id", String(Number(form.supplier_id)));
  formData.append("price", String(Number(form.price)));
  formData.append("stock", String(Number(form.stock)));
  formData.append("unit", form.unit);

  // Optional integer field – only append if present and valid
  if (form.category_id?.trim()) {
    formData.append("category_id", String(Number(form.category_id)));
  }

  // Image file – optional
  if (image) {
    formData.append("image", image);
  }

  try {
    await api.post("/products", formData); // Axios auto-sets multipart headers
    onSuccess();
    onClose();
    setForm({
      name: "",
      description: "",
      supplier_id: "",
      category_id: "",
      price: "",
      stock: "",
      unit: "",
    });
    setImage(null);
  } catch (err: any) {
    console.error("Failed to add product", err);

    // Friendly FastAPI validation error handling
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
    <Modal isOpen={isOpen} onClose={onClose} >
        <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Product Name" name="name" value={form.name} onChange={handleChange} required />
            <Input
            placeholder="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            />
            <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">
                Supplier
            </label>
            <select
                name="supplier_id"
                value={form.supplier_id}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
                <option value="">Select Supplier</option>
                {suppliers.map((s: any) => (
                <option key={s.name} value={s.id}>
                    {s.name}
                </option>
                ))}
            </select>
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">
                    Category
                </label>
                <select
                    name="category_id"
                    value={form.category_id}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                    <option value="">Select Category</option>
                    {categories.map((c: any) => (
                    <option key={c.name} value={c.id}>
                        {c.name}
                    </option>
                    ))}
                </select>
            </div>

            <Input
            placeholder="Price"
            name="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            required
            />
            <Input
            placeholder="Stock"
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            required
            />
            <Input
            placeholder="Unit"
            name="unit"
            value={form.unit}
            onChange={handleChange}
            required
            />
            <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">
                Image
            </label>
            <FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                
            />
            </div>

            <div className="pt-2 text-right">
            <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Add Product"}
            </Button>
            </div>
        </form>
        </div>
    </Modal>
  );
}
