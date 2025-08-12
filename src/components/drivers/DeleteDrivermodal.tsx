"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";
import type { AxiosError } from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  DriverId: number;
};

type ValidationErrorDetail = {
  loc?: (string | number)[];
  msg: string;
  type?: string;
};

export default function DeleteDriverModal({
  isOpen,
  onClose,
  onSuccess,
  DriverId,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/drivers/${DriverId}`);
      onSuccess();
      onClose();
    } catch (err) {
      const axiosError = err as AxiosError<{ detail?: ValidationErrorDetail[] }>;
      const details = axiosError.response?.data?.detail;

      if (Array.isArray(details)) {
        const formatted = details
          .map((d: ValidationErrorDetail) => `${d.loc?.join(".")}: ${d.msg}`)
          .join("\n");
        alert("Validation failed:\n" + formatted);
      } else {
        alert("Unexpected error: " + (axiosError.message || "Unknown error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Confirm Deletion
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to delete this driver? This action cannot be undone.
        </p>

        <div className="flex justify-center space-x-4">
          <Button
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700"
          >
            {loading ? "Deleting..." : "🗑️ Delete"}
          </Button>
          <Button
            onClick={onClose}
            disabled={loading}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}