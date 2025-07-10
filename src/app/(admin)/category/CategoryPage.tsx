"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import CategoryTable from "@/components/categories/CategoriesTable";
import AddCategoryModal from "@/components/categories/AddCategoryModal";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  

  const fetchCategories = () => {
    setLoading(true);
    api
      .get("/categories")
      .then(setCategories)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchCategories, []);

  if (loading) return <p className="p-6 text-gray-500">Loading categories...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
          Categories
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700"
        >
          + Add Category
        </button>
      </div>

      <CategoryTable categories={categories} />

    <AddCategoryModal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    onSuccess={fetchCategories}
    />

    </div>
  );
}
