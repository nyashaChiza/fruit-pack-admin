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
  claims: Order[];
  onSetStatus: (id: string | number) => void;
};

export default function ClaimsTable({ claims, onSetStatus }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-y border-gray-100 dark:border-gray-800">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Driver ID</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Order ID</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Created</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {claims && claims.length > 0 ? (
              claims.map((claim) => (
                <tr key={claim.id}>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{claim.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{claim.driver_id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{claim.order_id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{claim.status}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 space-x-2">
                    <button
                      onClick={() => onSetStatus(claim.id)}
                      className="text-blue-600 hover:underline"
                    >
                      Set Status
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
