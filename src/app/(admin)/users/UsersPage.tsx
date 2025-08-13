"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import UserTable from "@/components/users/UserTable";
import AddUserModal from "@/components/users/AddUserModal";
import EditUserModal from "@/components/users/EditUserModal";
import DeleteUserModal from "@/components/users/DeleteUserModal";

type User = {
  id: number;
  full_name: string;
  username: string;
  email: string;
  password:string;
  role: string;
  is_active: boolean;
};
	

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);


  const fetchUsers = () => {
    setLoading(true);
    api
      .get<User[]>("/users")
      .then(setUsers)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchUsers, []);

  if (loading) return <p className="p-6 text-gray-500">Loading users...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
          Users
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700"
        >
          + Add User
        </button>
      </div>

      <UserTable users={users}
        onEdit={(UserId) => {
          setSelectedUserId(UserId);
          setShowEditModal(true);
        }}
        onDelete={(UserId) => {
          setSelectedUserId(UserId);
          setShowDeleteModal(true);
        }}
      />

      <AddUserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchUsers}
      />
      {selectedUserId !== null && (
        <EditUserModal
          UserId={selectedUserId}
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedUserId(null);
          }}
          onSuccess={() => {
            fetchUsers();
            setShowEditModal(false);
            setSelectedUserId(null);
          }}
        />
      )}
      {selectedUserId !== null && (
        <DeleteUserModal
          UserId={selectedUserId}
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedUserId(null);
          }}
          onSuccess={() => {
            fetchUsers();
            setShowDeleteModal(false);
            setSelectedUserId(null);
          }}
        />
      )}

    </div>
  );
}