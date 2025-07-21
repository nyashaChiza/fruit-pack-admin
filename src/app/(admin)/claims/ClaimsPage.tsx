"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ClaimsTable from "@/components/claims/ClaimsTable";
import ClaimStatusModal from "@/components/claims/SetClaimStatusClaimModal";
type Claim = {
  id:  number;
  driver_id: number;
  order_id: number;
  status: string;
};
export default function ClaimsPage() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedClaimId, setSelectedClaimId] = useState<string | null>(null);
  const [showClaimStatusModal, setShowClaimStatusModal] = useState(false);

  const fetchClaims = () => {
    setLoading(true);
    api
      .get<Claim[]>("/claims/admin/claims")
      .then(setClaims)
      .catch((err) => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchClaims, []);

  if (loading)
    return <p className="p-6 text-gray-500">Loading order claims...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white/90">
          Claims
        </h1>
      </div>

      <ClaimsTable
        claims={claims}
        onSetStatus={(claimId) => {
          setSelectedClaimId(claimId);
          setShowClaimStatusModal(true);
        }}
      />

      {selectedClaimId && (
        <ClaimStatusModal
          claimId={selectedClaimId}
          isOpen={showClaimStatusModal}
          onClose={() => setShowClaimStatusModal(false)}
          onSuccess={() => {
            fetchClaims();
            setSelectedClaimId(null);
          }}
        />
      )}
    </div>
  );
}
