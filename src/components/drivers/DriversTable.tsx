"use client";

type Driver = {
  id: number | string;
  vehicle_number: string;
  user_id: string;
  status: number;
  longitude: number;
  latitude: number;
};

type Props = {
  drivers: Driver[];
  onEdit?: (driver: Driver) => void;
  onDelete?: (id: string | number) => void;
};

export default function DriversTable({ drivers, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                Vehicle Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                User ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Loaction
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-800 dark:bg-transparent">
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {driver.vehicle_number}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {driver.user_id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {driver.status}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {driver.longitude}, {driver.latitude}
              </td>
              <td className="px-6 py-4 text-sm text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit?.(driver)}
                    className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete?.(driver.id)}
                    className="text-xs text-red-600 hover:underline dark:text-red-400"
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
