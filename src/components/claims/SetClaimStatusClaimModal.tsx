"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  claimId: string;
};

export default function ClaimStatusModal({
  isOpen,
  onClose,
  onSuccess,
  claimId,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleAction = async (action: "approve" | "reject") => {
    setLoading(true);
    try {
      await api.post(`/claims/admin/claims/${claimId}/${action}`, {});
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error(`Failed to ${action} claim`, err);
      const details = err.response?.data?.detail;
      if (details && Array.isArray(details)) {
        const formatted = details
          .map((d: any) => `${d.loc?.join(".")}: ${d.msg}`)
          .join("\n");
        alert("Validation failed:\n" + formatted);
      } else {
        alert("Unexpected error: " + (err.message || "Unknown error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Set Claim Status
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Please choose whether to approve or reject this claim.
        </p>

        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => handleAction("approve")}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? "Processing..." : "✅ Approve"}
          </Button>
          <Button
            onClick={() => handleAction("reject")}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700"
          >
            {loading ? "Processing..." : "❌ Reject"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
