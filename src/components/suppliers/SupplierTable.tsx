"use client";

import React from "react";

type Supplier = {
  id: number | string;
  name: string;
  contact_email: string;
  phone_number: string;
};

type Props = {
  suppliers: Supplier[];
  onEdit: (SupplierId: number) => void;
  onDelete: (SupplierId: number) => void;
};

export default function SupplierTable({ suppliers, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Phone
            </th>
            <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{supplier.name}</td>
              <td className="px-4 py-2">{supplier.contact_email}</td>
              <td className="px-4 py-2">{supplier.phone_number}</td>
              <td className="px-4 py-2 text-right space-x-2">
                <button
                  onClick={() => onEdit(Number(supplier.id))}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                {onDelete && (
                  <button
                    onClick={() => onDelete(Number(supplier.id))}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
