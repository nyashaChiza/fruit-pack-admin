"use client";

import React, { useState } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

// Modal props
type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
};

export default function AddUserModal({ isOpen, onClose, onSuccess }: Props) {
    const [form, setForm] = useState({
        email: "",
        username: "",
        role: "",
        full_name: "",
        password: "",
        is_active: true,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Create user
            const userPayload = {
                email: form.email,
                username: form.username,
                full_name: form.full_name,
                is_active: true,
                role: form.role,
                password: form.password,
            };

            const userRes = await api.post("/users/", userPayload);

            // Support flexible backend response shape
            const userId: number | undefined =
                (userRes as { id?: number })?.id ??
                (userRes as { user?: { id?: number } })?.user?.id;

            if (!userId) {
                throw new Error("User creation failed: No ID returned");
            }



            onSuccess();
            onClose();

        } catch (err: unknown) {
            console.error("❌ Failed to add user:", err);

            if (isApiValidationError(err)) {
                const details = err.response.data.detail;
                const formatted = details
                    .map((d) => `${d.loc?.join(".")}: ${d.msg}`)
                    .join("\n");
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
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Add User
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
                    <Input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} required />
                    <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                        <option value="" disabled>
                            Select Role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="supplier">Supplier</option>

                    </select>
                    <Input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />

                    <div className="pt-2 text-right">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Add User"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
