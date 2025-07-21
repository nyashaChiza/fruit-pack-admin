"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";



type UpdateOrderStatusModalProps = {
  orderId: string | number;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

export function UpdateOrderStatusModal({
  orderId,
  isOpen,
  onClose,
  onSuccess,
}: UpdateOrderStatusModalProps) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setStatus("");
    if (orderId) {
      api.get<{ status: string }>(`/orders/${orderId}`)
        .then((data) => setStatus(data.status))
        .catch(() => setStatus(""));
    }
  }, [isOpen, orderId]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put(`/orders/${orderId}/status`, { status });
      onSuccess();
      onClose();
    } catch (err) {
      console.log(err)
      alert(`Failed to update order status: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Update Order Status
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">
              Status
            </label>
            <select
              name="status"
              value={status}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="">Select Status</option>
              {statusOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="pt-2 text-right">
            <Button type="submit" disabled={loading || !status}>
              {loading ? "Updating..." : "Update Status"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}