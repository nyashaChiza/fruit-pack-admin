"use client";

type Product = {
  id: number ;
  name: string;
  unit: string;
  price: number;
  stock: number;
};

type Props = {
  products: Product[];
  onProductEdit: (productId: number) => void;
  onProductDelete: (productId: number) => void;
};

export default function ProductsTable({ products, onProductEdit, onProductDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Stock
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-800 dark:bg-transparent">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {product.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                R{product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {product.stock} {product.unit}
              </td>
              <td className="px-6 py-4 text-sm text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onProductEdit(Number(product.id))}
                    className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onProductDelete(Number(product.id))}
                    className="text-xs text-red-600 hover:underline dark:text-blue-400"
                  >
                    Delete
                  </button>
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
