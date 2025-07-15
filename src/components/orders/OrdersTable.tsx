"use client";
import React from "react";

type Order = {
  id: string | number;
  customer_name: string;
  delivery_status: string;
  payment_status: string;
  payment_method: string;
  total: string | number;
};

type Props = {
  orders: Order[];
  onAssignDriver: (id: string | number) => void;
  onUpdateStatus: (id: string | number) => void;
};

export default function RecentOrders({ orders, onAssignDriver, onUpdateStatus }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-y border-gray-100 dark:border-gray-800">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">#</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Customer</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Delivery Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Payment Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Payment Method</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Total</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{order.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{order.customer_name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{order.delivery_status}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{order.payment_status}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{order.payment_method}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">R{Number(order.total).toFixed(2)}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 space-x-2">
                    <button
                      onClick={() => onAssignDriver(order.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Assign Driver
                    </button>
                    <button
                      onClick={() => onUpdateStatus(order.id)}
                      className="text-green-600 hover:underline"
                    >
                      Update Status
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No recent orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
