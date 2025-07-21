"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import DriversTable from "@/components/drivers/DriversTable";
import AddDriverModal from "@/components/drivers/AddDriverModal";

type Driver = {
  id: string;
  name: string;
  // Add other driver fields as needed
};

export default function ProductsPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  

  const fetchDrivers = () => {
    setLoading(true);
    api
      .get<Driver[]>("/drivers")
      .then(setDrivers)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchDrivers, []);

  if (loading) return <p className="p-6 text-gray-500">Loading drivers...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
          Drivers
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700"
        >
          + Add Driver
        </button>
      </div>

      <DriversTable drivers={drivers} />

    <AddDriverModal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    onSuccess={fetchDrivers}
    />

    </div>
  );
}
