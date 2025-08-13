"use client";

type User = {
  id: number;
  full_name: string;
  username: string;
  email: string;
  role: string;
  is_active: boolean;
};

type Props = {
  users: User[];
  onEdit: (DriverId: number) => void;
  onDelete: (DriverId: number) => void;
};

export default function UserTable({ users, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Role
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-800 dark:bg-transparent">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {user.full_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {user.username}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {user.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {user.role}
              </td>
              <td className="px-6 py-4 text-sm text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onEdit(Number(user.id))}
                    className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(Number(user.id))}
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
