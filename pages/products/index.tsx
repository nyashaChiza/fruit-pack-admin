// app/admin/products/index.tsx
import React from "react";
import axios from "@/lib/axios"; // Adjust if needed
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  unit: string;
  category: string;
}
const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products/");
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
