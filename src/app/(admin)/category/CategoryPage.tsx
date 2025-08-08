"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import CategoryTable from "@/components/categories/CategoriesTable";
import AddCategoryModal from "@/components/categories/AddCategoryModal";
import EditCategoryModal from "@/components/categories/EditCategoryModal";
import DeleteCategoryModal from "@/components/categories/DeleteCategoryModal";

type Category = {
  id: number | string;
  name: string;
  icon: string;
};

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const fetchCategories = () => {
    setLoading(true);
    api
      .get<Category[]>("/categories")
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

      <CategoryTable categories={categories}
       onEdit={(CategoryId) => {
          setSelectedCategoryId(CategoryId);
          setShowEditModal(true);
        }}
        onDelete={(categoryId) => {
          setSelectedCategoryId(categoryId);
          setShowDeleteModal(true);
        }} />

      <AddCategoryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchCategories}
      />
      {selectedCategoryId !== null && (
        <EditCategoryModal
          categoryId={selectedCategoryId}
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedCategoryId(null);
          }}
          onSuccess={() => {
            fetchCategories();
            setShowEditModal(false);
            setSelectedCategoryId(null);
          }}
        />
      )}
      {selectedCategoryId !== null && (
              <DeleteCategoryModal
                categoryId={selectedCategoryId}
                isOpen={showDeleteModal}
                onClose={() => {
                  setShowDeleteModal(false);
                  setSelectedCategoryId(null);
                }}
                onSuccess={() => {
                  fetchCategories();
                  setShowDeleteModal(false);
                  setSelectedCategoryId(null);
                }}
              />
            )}


    </div>
  );
}
