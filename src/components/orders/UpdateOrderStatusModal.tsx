"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

type Props = {
  orderId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const statuses = ["pending", "shipped", "delivered", "completed"] as const;

export default function UpdateOrderStatusModal({
  orderId,
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.put(`/orders/${orderId}/status`, { status }); // expects { "status": "shipped" }

      onSuccess();
      onClose();
      setStatus("");
    } catch (err: any) {
      console.error("Failed to update order status", err);

      const details = err.response?.data?.detail;
      if (Array.isArray(details)) {
        alert(
          "Validation failed:\n" +
            details.map((d: any) => `${d.loc?.join(".")}: ${d.msg}`).join("\n")
        );
      } else {
        alert("Unexpected error: " + (err.message || "Unknown error"));
      }
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
              Select New Status
            </label>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="">-- Choose status --</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2 text-right">
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Status"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
