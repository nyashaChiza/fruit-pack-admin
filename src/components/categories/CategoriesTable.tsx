"use client";

type Category = {
  id: number | string;
  name: string;
  icon: string;
};

type Props = {
  categories: Category[];
  onEdit?: (category: Category) => void;
  onDelete?: (id: string | number) => void;
};

export default function CategoryTable({ categories, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Icon</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-800 dark:bg-transparent">
          {categories.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                No categories available.
              </td>
            </tr>
          ) : (
            categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {category.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {category.icon}
                </td>
                <td className="px-6 py-4 text-sm text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit?.(category)}
                      className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete?.(category.id)}
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
