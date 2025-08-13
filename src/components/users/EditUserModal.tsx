"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";



type User = {
  id: number;
  full_name: string;
  username: string;
  email: string;
  role: string;
  password:string;
  is_active: boolean;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    UserId: number;
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

export default function EditUserModal({ isOpen, onClose, onSuccess, UserId }: Props) {
    const [form, setForm] = useState({
        full_name: "",
        role: "",
        username:"",
        email:"",
        is_active:true,
        password: ""
    });

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!isOpen) return;

        Promise.all([
            api.get<User>(`/users/${UserId}`).then((user) => {
                setForm({
                    full_name: user.full_name,
                    role: user.role,
                    email: user.email,
                    username: user.username,
                    is_active: user.is_active,
                    password: ""
                });
            }),
        ]).catch((err) => console.error("Failed to fetch data:", err));
    }, [isOpen, UserId]);

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
            await api.put(`/users/${UserId}`, {
                ...form
            });
            onSuccess();
            onClose();
        } catch (err: unknown) {
            console.error(`❌ Failed to update User:`, err);
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
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Update User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        
                    </select>

                    <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
                    <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <Input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
                    <div className="pt-2 text-right">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Update User"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
