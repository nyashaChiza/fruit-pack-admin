"use client";

type Supplier = {
  id: number | string;
  name: string;
  contact_email: string;
  phone_number: string;
};

type Props = {
  suppliers: Supplier[];
  onEdit?: (supplier: Supplier) => void;
  onDelete?: (id: string | number) => void;
};

export default function SupplierTable({ suppliers, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Phone</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-800 dark:bg-transparent">
          {suppliers.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                No suppliers available.
              </td>
            </tr>
          ) : (
            suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {supplier.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {supplier.contact_email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {supplier.phone_number}
                </td>
                <td className="px-6 py-4 text-sm text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit?.(supplier)}
                      className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete?.(supplier.id)}
                      className="text-xs text-red-600 hover:underline dark:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
