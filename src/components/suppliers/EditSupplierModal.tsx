"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";




type Supplier = {
    id: number | string;
    name: string;
    contact_email: string;
    phone_number: string;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    SupplierId: number;
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

export default function EditSupplierModal({ isOpen, onClose, onSuccess, SupplierId }: Props) {
    const [form, setForm] = useState({
        name: "",
        contact_email: "",
        phone_number: "",
    });

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!isOpen) return;

        Promise.all([
            api.get<Supplier>(`/suppliers/${SupplierId}`).then((supplier) => {
                setForm({
                    name: supplier.name,
                    contact_email: supplier.contact_email,
                    phone_number: supplier.phone_number,
                });
            }),
        ]).catch((err) => console.error("Failed to fetch data:", err));
    }, [isOpen, SupplierId]);

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
            await api.put(`/suppliers/${SupplierId}`, {
                ...form
            });
            onSuccess();
            onClose();
        } catch (err: unknown) {
            console.error(`❌ Failed to update supplier:`, err);
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
                    <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                    <Input name="contact_email" placeholder="Email" value={form.contact_email} onChange={handleChange} required />
                    <Input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={handleChange} required />
                    <div className="pt-2 text-right">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Update Supplier"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
