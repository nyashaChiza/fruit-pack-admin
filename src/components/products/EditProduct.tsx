"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal/index";

type Supplier = { id: number; name: string };
type Category = { id: number; name: string };

type Product = {
    id: number;
    name: string;
    description: string;
    unit: string;
    price: number;
    stock: number;
    supplier_id: number;
    category_id: number;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    productId: number;
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

export default function EditProductModal({ isOpen, onClose, onSuccess, productId }: Props) {
    const [form, setForm] = useState({
        name: "",
        description: "",
        supplier_id: 0,
        category_id: 0,
        price: 1,
        stock: 0,
        unit: "",
    });

    const [loading, setLoading] = useState(false);
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        Promise.all([
            api.get<Supplier[]>("/suppliers").then(setSuppliers),
            api.get<Category[]>("/categories").then(setCategories),
            api.get<Product>(`/products/${productId}`).then((prod) => {
                setForm({
                    name: prod.name,
                    description: prod.description,
                    supplier_id: prod.supplier_id,
                    category_id: prod.supplier_id,
                    price: prod.price,
                    stock: prod.stock,
                    unit: prod.unit,
                });
            }),
        ]).catch((err) => console.error("Failed to fetch data:", err));
    }, [isOpen, productId]);

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
            await api.put(`/products/${productId}`, {
                ...form,
                supplier_id: Number(form.supplier_id),
                category_id: Number(form.category_id),
                price: Number(form.price),
                stock: Number(form.stock),
            });

            onSuccess();
            onClose();
        } catch (err: unknown) {
            console.error(`❌ Failed to update product:`, err);
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
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Update Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
                    <Input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />

                    <div>
                        <label className="block mb-1 text-sm font-medium">Supplier</label>
                        <select
                            name="supplier_id"
                            value={form.supplier_id}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border px-4 py-2 text-sm"
                        >
                            <option value="">Select Supplier</option>
                            {suppliers.map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Category</label>
                        <select
                            name="category_id"
                            value={form.category_id}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border px-4 py-2 text-sm"
                        >
                            <option value="">Select Category</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Input name="price" type="number" step={0.01} placeholder="Price" value={form.price} onChange={handleChange} required />
                    <Input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required />
                    <Input name="unit" placeholder="Unit" value={form.unit} onChange={handleChange} required />

                    <div className="pt-2 text-right">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Update Product"}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
