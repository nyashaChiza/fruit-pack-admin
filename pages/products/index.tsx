// pages/products/index.tsx
import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/products/create">
          <button className="bg-green-600 text-white px-4 py-2 rounded">+ Add Product</button>
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <p>Product list goes here.</p>
      </div>
    </div>
  );
}
