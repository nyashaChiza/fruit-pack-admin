"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ProductsTable from "@/components/products/ProductsTable";
import AddProductModal from "@/components/products/AddProductModal";
import EditProductModal from "@/components/products/EditProduct";
import DeleteProductModal from "@/components/products/deleteProductModal";

type Product = {
  id: number;
  name: string;
  unit: string;
  price: number;
  stock: number;
};
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700"
        >
          + Add Product
        </button>
      </div>

      <ProductsTable products={products}
        onProductEdit={(ProductId) => {
          setSelectedProductId(ProductId);
          setShowEditModal(true);
        }}
        onProductDelete={(ProductId) => {
          setSelectedProductId(ProductId);
          setShowDeleteModal(true);
        }}
      />

      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchProducts}
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
      {selectedProductId !== null && (
        <DeleteProductModal
          productId={selectedProductId}
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedProductId(null);
          }}
          onSuccess={() => {
            fetchProducts();
            setShowDeleteModal(false);
            setSelectedProductId(null);
          }}
        />
      )}

    </div>
  );
}