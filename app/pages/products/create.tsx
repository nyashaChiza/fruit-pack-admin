"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios"; // Adjust if needed
import Link from "next/link";

export default function CreateProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    category_id: "",
    supplier_id: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Fetch categories and suppliers
    axios.get("/categories/").then((res) => setCategories(res.data));
    axios.get("/suppliers/").then((res) => setSuppliers(res.data));
  }, []);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      for (let key in form) {
        formData.append(key, form[key]);
      }
      await axios.post("/products/", formData);
      router.push("/admin/products");
    } catch (err) {
      console.error("Error creating product:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="unit"
          placeholder="Unit (e.g. kg, box)"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />

        <select
          name="category_id"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          name="supplier_id"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Supplier</option>
          {suppliers.map((sup) => (
            <option key={sup.id} value={sup.id}>
              {sup.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />

        <div className="flex justify-between mt-6">
          <Link href="/admin/products">
            <button type="button" className="text-gray-600">Cancel</button>
          </Link>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded"
            disabled={submitting}
          >
            {submitting ? "Creating..." : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
