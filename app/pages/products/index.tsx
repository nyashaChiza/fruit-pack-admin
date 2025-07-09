// app/admin/products/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import getToken from "@/app/lib/auth"; // Ensure it's a default export or adjust
import api from "@/app/lib/api";

interface Product {
  id: number;
  name: string;
  price: string;
  unit: string;
  category_name: string;
  stock: number;
}

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!token) return;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await api.get("/products/");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    if (token) fetchProducts();
  }, [token]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/admin/products/create">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            + Add Product
          </button>
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="border-b text-left">
            <th className="p-4">Name</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Category</th>
            <th>Stock</th>
            <th className="text-right pr-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">{product.name}</td>
              <td>{product.price}</td>
              <td>{product.unit}</td>
              <td>{product.category_name}</td>
              <td>{product.stock}</td>
              <td className="text-right pr-4">
                <Link href={`/admin/products/${product.id}`}>
                  <button className="text-blue-600 mr-3">View</button>
                </Link>
                <Link href={`/admin/products/${product.id}/edit`}>
                  <button className="text-yellow-600 mr-3">Edit</button>
                </Link>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
