"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";




type Driver = {
    id: number | string;
    vehicle_number: string;
    driver_name: string;
    status: string;
    longitude: number;
    latitude: number;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    DriverId: number;
};

type ValidationDetail = {
    loc?: (string | number)[];
    msg: string;
    type?: string;
};

function isApiValidationError(err: unknown): err is {
    response: { data: { detail: ValidationDetail[] } };
} {
    return (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        Array.isArray(
            typeof (err as { response?: { data?: { detail?: unknown } } }).response?.data?.detail === "object"
                ? (err as { response: { data: { detail: unknown } } }).response.data.detail
                : []
        )
    );
}

export default function EditDriverModal({ isOpen, onClose, onSuccess, DriverId }: Props) {
    const [form, setForm] = useState({
        name: "",
        contact_email: "",
        phone_number: "",
    });

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!isOpen) return;

        Promise.all([
            api.get<Driver>(`/drivers/${DriverId}`).then((driver) => {
                setForm({
                    vehicle_number: driver.vehicle_number,
                    status: driver.status,
                    longitude: driver.longitude,
                    latitude: driver.latitude
                });
            }),
        ]).catch((err) => console.error("Failed to fetch data:", err));
    }, [isOpen, DriverId]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.put(`/drivers/${DriverId}`, {
                ...form
            });
            onSuccess();
            onClose();
        } catch (err: unknown) {
            console.error(`❌ Failed to update driver:`, err);
            if (isApiValidationError(err)) {
                const details = err.response.data.detail;
                const formatted = details.map((d) => `${d.loc?.join(".")}: ${d.msg}`).join("\n");
                alert("Validation failed:\n" + formatted);
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
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Update Supplier</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="vehicle_number" placeholder="Vehicle Number" value={form.vehicle_number} onChange={handleChange} required />
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                        <option value="" disabled>
                            Select status
                        </option>
                        <option value="active">Active</option>
                        <option value="busy">Busy</option>
                        <option value="offline">Offline</option>
                    </select>

                    <Input name="longitude" placeholder="Longitude" value={form.longitude} onChange={handleChange} required />
                    <Input name="latitude" placeholder="Latitude" value={form.latitude} onChange={handleChange} required />
                    <div className="pt-2 text-right">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Update Driver"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
