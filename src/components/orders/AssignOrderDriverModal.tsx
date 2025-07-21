"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

type Props = {
  orderId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type Driver = {
  id: number;
  vehicle_number: string;
  status: string;
};

type ValidationDetail = {
  loc?: (string | number)[];
  msg: string;
  type?: string;
};

type ApiErrorResponse = {
  response: {
    data: {
      detail: ValidationDetail[];
    };
  };
};

function isApiValidationError(err: unknown): err is ApiErrorResponse {
  return (
    typeof err === "object" &&
    err !== null &&
    "response" in err &&
    typeof (err as Record<string, unknown>).response === "object" &&
    Array.isArray((err as ApiErrorResponse).response?.data?.detail)
  );
}

export default function AssignOrderDriverModal({
  orderId,
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({ driverId: "" });
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    api
      .get<Driver[]>("/drivers")
      .then(setDrivers)
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.error("Failed to fetch drivers:", err.message);
        } else {
          console.error("Unknown error while fetching drivers");
        }
      });
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ driverId: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.put(`/orders/${orderId}/assign-driver`, {
        driver_id: Number(form.driverId),
      });

      onSuccess();
      onClose();
      setForm({ driverId: "" });
    } catch (err: unknown) {
      console.error("Failed to assign driver", err);

      if (isApiValidationError(err)) {
        const details = err.response.data.detail;
        alert(
          "Validation failed:\n" +
            details.map((d) => `${d.loc?.join(".")}: ${d.msg}`).join("\n")
        );
      } else if (err instanceof Error) {
        alert("Unexpected error: " + err.message);
      } else {
        alert("Unexpected unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Assign Driver to Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white/80">
              Select Driver
            </label>
            <select
              name="driverId"
              value={form.driverId}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="">-- Choose a driver --</option>
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.vehicle_number} - {driver.status}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2 text-right">
            <Button type="submit" disabled={loading}>
              {loading ? "Assigning..." : "Assign Driver"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
