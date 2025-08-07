"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ProductsTable from "@/components/products/ProductsTable";
import AddProductModal from "@/components/products/AddProductModal";
import EditProductModal from "@/components/products/EditProduct";


type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    api
      .get<Product[]>("/products")
      .then(setProducts)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchProducts, []);

  if (loading) return <p className="p-6 text-gray-500">Loading products...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
          Products
        </h1>
      </div>

      <ProductsTable
        products={products}
        onEdit={(productId) => {
          setSelectedProductId(selectedProductId);
          setShowEditModal(true);
        }}
      />

      {selectedProductId !== null && (
        <EditProductModal
          productId={selectedProductId}
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedProductId(null);
          }}
          onSuccess={() => {
            fetchProducts();
            setShowEditModal(false);
            setSelectedProductId(null);
          }}
        />
      )}
    </div>
  );
}