// app/admin/orders/[id].tsx
import React from "react";
import { useRouter } from "next/router";

export default function OrderDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order #{id} Details</h1>

      {/* Order Info Section */}
      <section className="mb-6 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Order Information</h2>
        {/* TODO: Fetch and render order data */}
        <p>Customer: <strong>Customer Name</strong></p>
        <p>Address: <strong>Customer Address</strong></p>
        <p>Contact: <strong>Customer Conact</strong></p>
        <p>Status: <strong>Pending</strong></p>
        <p>Total: R299.99</p>
      </section>

        {/* Order Items Section */}
        <section className="mb-6 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Order Items</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder row */}
            <tr>
              <td className="px-4 py-2">Apple</td>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">R50.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Banana</td>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">R30.00</td>
            </tr>
            </tbody>
        </table>
        </section>

      {/* Change Order Status */}
      <section className="mb-6 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Change Status</h2>
        {/* TODO: Implement status select + update button */}
        <select className="border p-2 rounded w-full mb-3">
          <option>Cancelled</option>
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Complete</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Update Status</button>
      </section>

      {/* Assign Driver */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Assign Driver</h2>
        {/* TODO: Fetch available drivers + select */}
        <select className="border p-2 rounded w-full mb-3">
          <option>Select a driver</option>
          <option value="1">John Doe</option>
          <option value="2">Jane Smith</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Assign Driver</button>
      </section>
    </div>
  );
}
