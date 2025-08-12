"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import SupplierTable from "@/components/suppliers/SupplierTable";
import AddSupplierModal from "@/components/suppliers/AddSupplier";
import EditSupplierModal from "@/components/suppliers/EditSupplierModal";
import DeleteSupplierModal from "@/components/suppliers/DeleteSupplierModal";

type Supplier = {
  id: number | string;
  name: string;
  contact_email: string;
  phone_number: string;
};
export default function SupplierPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedSupplierId, setSelectedSupplierId] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const fetchSuppliers = () => {
    setLoading(true);
    api
      .get<Supplier[]>("/suppliers")
      .then(setSuppliers)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchSuppliers, []);

  if (loading) return <p className="p-6 text-gray-500">Loading Suppliers...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
          Suppliers
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700"
        >
          + Add Supplier
        </button>
      </div>

      <SupplierTable suppliers={suppliers}
        onEdit={(SupplierId) => {
          setSelectedSupplierId(SupplierId);
          setShowEditModal(true);
        }}
      />
      {selectedSupplierId !== null && (
        <EditSupplierModal
          SupplierId={selectedSupplierId}
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedSupplierId(null);
          }}
          onSuccess={() => {
            fetchSuppliers();
            setShowEditModal(false);
            setSelectedSupplierId(null);
          }}
        />
      )}
      {selectedSupplierId !== null && (
        <DeleteSupplierModal
          SupplierId={selectedSupplierId}
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedSupplierId(null);
          }}
          onSuccess={() => {
            fetchSuppliers();
            setShowDeleteModal(false);
            setSelectedSupplierId(null);
          }}
        />
      )}

      <AddSupplierModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchSuppliers}
      />

    </div>
  );
}
