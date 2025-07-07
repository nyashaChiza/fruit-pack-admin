// app/admin/products/index.tsx
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth"; // Adjust if needed 
import { api } from "@/lib/api"; // Adjust if needed

interface Product {
  id: number;
  name: string;
  price: string;
  unit: string;
  category: string;
}
const [products, setProducts] = useState<Product[]>([]);
const [token, setToken] = useState<string | null>(null);

useEffect(() => {
  const token = getToken();
  if (token) {
    setToken(token);
  }
}, setToken);

useEffect(() => {
  const fetchProducts = async () => {
    try {
        if (!token) {
            console.error("No token found");
            return;
        }
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await api.get("/products/");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };
  fetchProducts();
}, []);


export default function ProductsList() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="products/create">
          <button className="bg-green-600 text-white px-4 py-2 rounded">+ Add Product</button>
        </Link>
      </div>

      {/* TODO: Fetch and display products */}
      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="border-b text-left">
            <th className="p-4">Name</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Category</th>
            <th className="text-right pr-4">Actions</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr key={product.id} className="border-b">
                <td className="p-4">{product.name}</td>
                <td>{product.price}</td>
                <td>{product.unit}</td>
                <td>{product.category}</td>
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
